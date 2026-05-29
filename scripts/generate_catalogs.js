const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "scripts" || entry.name === "wind_forecast_3h_cutoffs") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function titleCase(value) {
  return value
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bTso\b/g, "TSO")
    .replace(/\bCsv\b/g, "CSV")
    .replace(/\bPng\b/g, "PNG")
    .replace(/\bMape\b/g, "MAPE")
    .replace(/\bMae\b/g, "MAE")
    .replace(/\bPicp\b/g, "PICP")
    .replace(/\bTabpfn\b/g, "TabPFN")
    .replace(/\bChronos2\b/g, "Chronos2")
    .replace(/\bXgboost\b/g, "XGBoost");
}

function domainOf(file) {
  if (file.startsWith("load_forecast_outputs/")) return "Load";
  if (file.startsWith("solar_forecast_outputs/")) return "Solar";
  if (file.startsWith("wind_forecast_outputs/")) return "Wind";
  return "Other";
}

function analysisType(file) {
  const name = file.toLowerCase();
  const base = path.basename(file).toLowerCase();
  if (name.includes("summary_plot") || name.includes("summary_plots") || name.includes("matrix") || base.includes("comparison")) return "Comparison/summary";
  if (base.includes("pred_vs_actual")) return "Predictions and context";
  if (name.includes("accuracy") || name.includes("eval") || name.includes("mape") || name.includes("mae") || name.includes("absolute_error") || name.includes("signed_error")) return "Accuracy";
  if (name.includes("stability") || name.includes("revision")) return "Stability";
  if (name.includes("uncertainty") || name.includes("picp") || name.includes("badness") || name.includes("monthly")) return "Uncertainty";
  if (name.includes("figure")) return "Comparison/summary";
  if (name.includes("scatter")) return "Accuracy";
  if (name.includes("prediction") || name.includes("day_ahead") || name.includes("actual") || name.includes("context") || base.includes("forecast")) return "Predictions and context";
  return "Other";
}

function countryOf(file) {
  const match = file.match(/(?:^|\/|_)(BE|DE|FR)(?:\/|_|$)/);
  return match ? match[1] : "multi-country";
}

function windSegmentOf(file) {
  if (/Wind[_/]Onshore/i.test(file)) return "Onshore";
  if (/Wind[_/]Offshore/i.test(file)) return "Offshore";
  return "Comparison/summary";
}

function isComparisonSummaryFigure(file) {
  const domain = domainOf(file);
  const name = file.toLowerCase();
  const base = path.basename(file).toLowerCase();
  if (domain === "Wind") return name.includes("summary_plot") || name.includes("summary_plots") || windSegmentOf(file) === "Comparison/summary";
  return countryOf(file) === "multi-country" || base.includes("comparison");
}

function pictureType(file) {
  const name = file.toLowerCase();
  const base = path.basename(file).toLowerCase();
  if (isComparisonSummaryFigure(file)) return "Comparison/summary";
  if (name.includes("stability") || name.includes("revision")) return "Stability";
  if (name.includes("uncertainty") || name.includes("picp") || name.includes("badness") || name.includes("monthly")) return "Uncertainty";
  return "Accuracy";
}

function modelOf(file) {
  const compact = file.replace(/\.(csv|png)$/i, "");
  const known = [
    "Weekly_Persistence",
    "TabPFN_Wind100mCovariates",
    "TabPFN_NoCovariates",
    "TabPFN",
    "Chronos2_SunCovariate",
    "Chronos2_NoCovariates",
    "Chronos2_ZeroNight",
    "Chronos2",
    "XGBoost_Wind100mCovariates",
    "XGBoost_NoCovariates",
    "XGBoost",
    "Persistence",
    "Ridge",
    "TSO",
  ];
  const found = known.find((token) => compact.toLowerCase().includes(token.toLowerCase()));
  return found ? titleCase(found) : "multiple";
}

function describe(file) {
  const base = path.basename(file, path.extname(file));
  const type = pictureType(file).toLowerCase();
  const country = countryOf(file);
  const model = modelOf(file);
  let subject = titleCase(base.replace(/^Figure_?\d+_?/i, ""));
  subject = subject.replace(/\s+/g, " ").trim();
  return `${type}; ${country}; ${model}; ${subject}.`;
}

function groupBy(items, keyFn) {
  return items.reduce((groups, item) => {
    const key = keyFn(item);
    groups[key] ||= [];
    groups[key].push(item);
    return groups;
  }, {});
}

function markdownLink(file) {
  return `[${file}](${encodeURI(file).replaceAll("%2F", "/")})`;
}

function detailsStart(lines, summary) {
  lines.push("<details>", `<summary>${summary}</summary>`, "");
}

function detailsEnd(lines) {
  lines.push("</details>", "");
}

function pushFigureTables(lines, filesForSection, headingLevel = 4) {
  const marks = "#".repeat(headingLevel);
  const byType = groupBy(filesForSection, pictureType);
  for (const type of ["Accuracy", "Stability", "Uncertainty", "Comparison/summary"]) {
    if (!byType[type]?.length) continue;
    lines.push(`${marks} ${type}`, "");
    lines.push("| Figure | Country | Model or scope | What to look for |");
    lines.push("| --- | --- | --- | --- |");
    for (const file of byType[type]) {
      lines.push(`| ${markdownLink(file)} | ${countryOf(file)} | ${modelOf(file)} | ${describe(file)} |`);
    }
    lines.push("");
  }
}

const files = walk(root).map(rel).filter((file) => !file.startsWith(".git/"));
const csvs = files.filter((file) => file.endsWith(".csv")).sort();
const pngs = files.filter((file) => file.endsWith(".png")).sort();

function makeDataGuide() {
  const lines = [
    "# Data Guide",
    "",
    "CSV artifacts are grouped by the same research domains used in the output folders. Within each domain, files are classified by analysis type so readers can jump directly to forecasts, accuracy, stability, and uncertainty results.",
    "",
    "## Category Map",
    "",
    "| Category | Folder | CSV files | Typical contents |",
    "| --- | --- | ---: | --- |",
  ];

  for (const domain of ["Load", "Solar", "Wind"]) {
    const domainFiles = csvs.filter((file) => domainOf(file) === domain);
    const folder = domain === "Load" ? "load_forecast_outputs/" : domain === "Solar" ? "solar_forecast_outputs/" : "wind_forecast_outputs/";
    lines.push(`| ${domain} | \`${folder}\` | ${domainFiles.length} | ${[...new Set(domainFiles.map(analysisType))].join(", ")} |`);
  }

  lines.push("", "## CSV Inventory", "");
  for (const domain of ["Load", "Solar", "Wind", "Other"]) {
    const domainFiles = csvs.filter((file) => domainOf(file) === domain);
    if (!domainFiles.length) continue;
    lines.push(`### ${domain}`, "");
    const byType = groupBy(domainFiles, analysisType);
    for (const type of Object.keys(byType).sort()) {
      lines.push(`#### ${type}`, "");
      lines.push("| File | Country | Model or scope |");
      lines.push("| --- | --- | --- |");
      for (const file of byType[type]) {
        lines.push(`| ${markdownLink(file)} | ${countryOf(file)} | ${modelOf(file)} |`);
      }
      lines.push("");
    }
  }
  return lines.join("\n");
}

function makePictureGuide() {
  const pictureTypes = ["Accuracy", "Stability", "Uncertainty", "Comparison/summary"];
  const lines = [
    "# Picture Guide",
    "",
    "PNG figures are classified by domain and analysis type. Use the expandable sections to move from domain to country-specific or wind-type-specific diagnostics.",
    "",
    "## Quick Classification",
    "",
    `| Domain | PNG files | ${pictureTypes.join(" | ")} |`,
    `| --- | ---: | ${pictureTypes.map(() => "---:").join(" | ")} |`,
  ];

  for (const domain of ["Load", "Solar", "Wind"]) {
    const domainFiles = pngs.filter((file) => domainOf(file) === domain);
    const counts = groupBy(domainFiles, pictureType);
    lines.push(`| ${domain} | ${domainFiles.length} | ${pictureTypes.map((type) => (counts[type] || []).length).join(" | ")} |`);
  }

  lines.push("", "## Figure Inventory", "");

  for (const domain of ["Load", "Solar"]) {
    const domainFiles = pngs.filter((file) => domainOf(file) === domain);
    if (!domainFiles.length) continue;
    detailsStart(lines, `${domain} (${domainFiles.length} figures)`);
    for (const country of ["BE", "DE", "FR"]) {
      const countryFiles = domainFiles.filter((file) => countryOf(file) === country && !isComparisonSummaryFigure(file));
      if (!countryFiles.length) continue;
      detailsStart(lines, `${country} (${countryFiles.length} figures)`);
      pushFigureTables(lines, countryFiles);
      detailsEnd(lines);
    }
    const comparisonFiles = domainFiles.filter(isComparisonSummaryFigure);
    if (comparisonFiles.length) {
      detailsStart(lines, `Comparison/summary (${comparisonFiles.length} figures)`);
      pushFigureTables(lines, comparisonFiles);
      detailsEnd(lines);
    }
    detailsEnd(lines);
  }

  const windFiles = pngs.filter((file) => domainOf(file) === "Wind");
  if (windFiles.length) {
    detailsStart(lines, `Wind (${windFiles.length} figures)`);
    for (const segment of ["Onshore", "Offshore"]) {
      const segmentFiles = windFiles.filter((file) => windSegmentOf(file) === segment && !isComparisonSummaryFigure(file));
      if (!segmentFiles.length) continue;
      detailsStart(lines, `${segment} (${segmentFiles.length} figures)`);
      for (const country of ["BE", "DE", "FR", "multi-country"]) {
        const countryFiles = segmentFiles.filter((file) => countryOf(file) === country);
        if (!countryFiles.length) continue;
        detailsStart(lines, `${country} (${countryFiles.length} figures)`);
        pushFigureTables(lines, countryFiles);
        detailsEnd(lines);
      }
      detailsEnd(lines);
    }
    const comparisonFiles = windFiles.filter(isComparisonSummaryFigure);
    if (comparisonFiles.length) {
      detailsStart(lines, `Comparison/summary (${comparisonFiles.length} figures)`);
      pushFigureTables(lines, comparisonFiles);
      detailsEnd(lines);
    }
    detailsEnd(lines);
  }

  const otherFiles = pngs.filter((file) => domainOf(file) === "Other");
  if (otherFiles.length) {
    detailsStart(lines, `Other (${otherFiles.length} figures)`);
    pushFigureTables(lines, otherFiles);
    detailsEnd(lines);
  }
  return lines.join("\n");
}

fs.writeFileSync(path.join(root, "DATA_GUIDE.md"), `${makeDataGuide()}\n`);
fs.writeFileSync(path.join(root, "PICTURE_GUIDE.md"), `${makePictureGuide()}\n`);

console.log(`Wrote DATA_GUIDE.md for ${csvs.length} CSV files`);
console.log(`Wrote PICTURE_GUIDE.md for ${pngs.length} PNG files`);
