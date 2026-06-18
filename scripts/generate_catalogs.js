const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pictureTypes = ["Accuracy", "Uncertainty", "Comparison/summary"];
const dataTypes = ["Accuracy", "Uncertainty", "Predictions and context", "Comparison/summary", "Other"];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "scripts", "node_modules"].includes(entry.name)) continue;
    if (entry.name === ".DS_Store") continue;
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
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bTso\b/g, "TSO")
    .replace(/\bCsv\b/g, "CSV")
    .replace(/\bPng\b/g, "PNG")
    .replace(/\bRmse\b/g, "RMSE")
    .replace(/\bMae\b/g, "MAE")
    .replace(/\bMape\b/g, "MAPE")
    .replace(/\bPicp\b/g, "PICP")
    .replace(/\bCrps\b/g, "CRPS")
    .replace(/\bTabpfn\b/g, "TabPFN")
    .replace(/\bXgboost\b/g, "XGBoost");
}

function domainOf(file) {
  if (file.startsWith("load_forecast_outputs/")) return "Load";
  if (file.startsWith("solar_forecast_outputs/")) return "Solar";
  if (file.startsWith("wind_forecast_outputs/")) return "Wind";
  if (file.startsWith("tso_forecast_quality_outputs/")) return "TSO forecast quality";
  return "Other";
}

function countryOf(file) {
  const match = file.match(/(?:^|\/|_)(BE|DE|FR)(?=\/|_|\.|$)/);
  return match ? match[1] : "multi-country";
}

function windSegmentOf(file) {
  const lower = file.toLowerCase();
  if (lower.includes("onshore")) return "Onshore";
  if (lower.includes("offshore")) return "Offshore";
  return "Comparison/summary";
}

function modelOf(file) {
  const known = [
    "Weekly_Persistence",
    "Daily_Persistence",
    "Persistence",
    "Chronos2_Wind100mCovariates",
    "Chronos2_NoCovariates",
    "Chronos2",
    "TabPFN_Wind100mCovariates",
    "TabPFN_NoCovariates",
    "TabPFN",
    "XGBoost_Wind100mCovariates",
    "XGBoost_NoCovariates",
    "XGBoost",
    "Ridge",
    "TSO",
  ];
  const found = known.find((token) => file.toLowerCase().includes(token.toLowerCase()));
  return found ? titleCase(found) : "multiple";
}

function isHeatmap(file) {
  return path.basename(file).toLowerCase().includes("heatmap");
}

function isComparisonSummary(file) {
  const lower = file.toLowerCase();
  const base = path.basename(file).toLowerCase();
  return (
    isHeatmap(file) ||
    countryOf(file) === "multi-country" ||
    lower.includes("latest_accuracy_summary_tables") ||
    lower.includes("latest_selected") ||
    lower.includes("reduced_selected") ||
    lower.includes("summary_plots") ||
    lower.includes("overleaf_figures_flat") ||
    base.includes("comparison") ||
    base.includes("matrix") ||
    base.includes("boxplot") ||
    base.includes("reduction") ||
    base.includes("best_family") ||
    base.includes("best_model")
  );
}

function analysisType(file) {
  const lower = file.toLowerCase();
  const base = path.basename(file).toLowerCase();
  if (lower.includes("/predictions/") || lower.includes("/context/") || lower.includes("metadata") || base.includes("forecast") || base.includes("prediction")) return "Predictions and context";
  if (lower.includes("/uncertainty/") || base.includes("uncertainty") || base.includes("picp") || base.includes("crps") || base.includes("interval") || base.includes("heatmap")) return "Uncertainty";
  if (lower.includes("/accuracy/") || base.includes("accuracy") || base.includes("scatter") || base.includes("rmse") || base.includes("mae") || base.includes("mape") || base.includes("error")) return "Accuracy";
  if (isComparisonSummary(file) || base.includes("summary")) return "Comparison/summary";
  return "Other";
}

function pictureType(file) {
  const lower = file.toLowerCase();
  const base = path.basename(file).toLowerCase();
  if (isHeatmap(file) || lower.includes("/uncertainty/") || base.includes("uncertainty") || base.includes("picp") || base.includes("crps") || base.includes("interval")) return "Uncertainty";
  if (isComparisonSummary(file) && !(base.includes("scatter") || base.includes("rmse") || base.includes("mae") || base.includes("mape") || base.includes("accuracy"))) return "Comparison/summary";
  return "Accuracy";
}

function quickPictureTypes(file) {
  const types = new Set([pictureType(file)]);
  if (isComparisonSummary(file)) types.add("Comparison/summary");
  return [...types];
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

function describe(file, forcedType = null) {
  const base = path.basename(file, path.extname(file));
  const type = (forcedType || pictureType(file)).toLowerCase();
  const subject = titleCase(base.replace(/^figure_?\d+_?/i, ""));
  return `${type}; ${countryOf(file)}; ${modelOf(file)}; ${subject}.`;
}

function pushFigureTables(lines, filesForSection, headingLevel = 4, forcedType = null) {
  const marks = "#".repeat(headingLevel);
  const byType = groupBy(filesForSection, (file) => forcedType || pictureType(file));
  for (const type of pictureTypes) {
    if (!byType[type]?.length) continue;
    lines.push(`${marks} ${type}`, "");
    lines.push("| Figure | Country | Model or scope | What to look for |");
    lines.push("| --- | --- | --- | --- |");
    for (const file of byType[type].sort()) {
      lines.push(`| ${markdownLink(file)} | ${countryOf(file)} | ${modelOf(file)} | ${describe(file, forcedType)} |`);
    }
    lines.push("");
  }
}

function makeDataGuide(files) {
  const dataFiles = files.filter((file) => /\.(csv|tex|md)$/i.test(file)).sort();
  const lines = [
    "# Data Guide",
    "",
    "CSV, LaTeX table, and markdown artifacts are grouped by research domain and analysis type. Prediction/context files are kept in the inventory for traceability, while the main report-facing summaries are easiest to find under Accuracy, Uncertainty, and Comparison/summary.",
    "",
    "## Category Map",
    "",
    "| Domain | Root folder | Data/table files | Typical contents |",
    "| --- | --- | ---: | --- |",
  ];

  for (const domain of ["Load", "Solar", "Wind", "TSO forecast quality"]) {
    const domainFiles = dataFiles.filter((file) => domainOf(file) === domain);
    const folder =
      domain === "Load"
        ? "load_forecast_outputs/"
        : domain === "Solar"
          ? "solar_forecast_outputs/"
          : domain === "Wind"
            ? "wind_forecast_outputs/"
            : "tso_forecast_quality_outputs/";
    const types = [...new Set(domainFiles.map(analysisType))].filter((type) => type !== "Other");
    lines.push(`| ${domain} | \`${folder}\` | ${domainFiles.length} | ${types.join(", ")} |`);
  }

  lines.push("", "## Inventory", "");
  for (const domain of ["Load", "Solar", "Wind", "TSO forecast quality", "Other"]) {
    const domainFiles = dataFiles.filter((file) => domainOf(file) === domain);
    if (!domainFiles.length) continue;
    lines.push(`### ${domain}`, "");
    const byType = groupBy(domainFiles, analysisType);
    for (const type of dataTypes) {
      if (!byType[type]?.length) continue;
      lines.push(`#### ${type}`, "");
      lines.push("| File | Country | Model or scope |");
      lines.push("| --- | --- | --- |");
      for (const file of byType[type].sort()) {
        lines.push(`| ${markdownLink(file)} | ${countryOf(file)} | ${modelOf(file)} |`);
      }
      lines.push("");
    }
  }
  return lines.join("\n");
}

function makePictureGuide(files) {
  const pngs = files.filter((file) => file.endsWith(".png")).sort();
  const lines = [
    "# Picture Guide",
    "",
    "PNG figures are classified by domain and analysis type. Expand the sections below to move from domain-level results to country-specific diagnostics, wind onshore/offshore diagnostics, and cross-model comparison figures.",
    "",
    "Heatmap figures are intentionally listed under both the relevant country/type uncertainty section and the Comparison/summary section, so category counts are not mutually exclusive.",
    "",
    "## Quick Classification",
    "",
    `| Domain | PNG files | ${pictureTypes.join(" | ")} |`,
    `| --- | ---: | ${pictureTypes.map(() => "---:").join(" | ")} |`,
  ];

  for (const domain of ["Load", "Solar", "Wind", "TSO forecast quality"]) {
    const domainFiles = pngs.filter((file) => domainOf(file) === domain);
    const counts = {};
    for (const file of domainFiles) {
      for (const type of quickPictureTypes(file)) counts[type] = (counts[type] || 0) + 1;
    }
    lines.push(`| ${domain} | ${domainFiles.length} | ${pictureTypes.map((type) => counts[type] || 0).join(" | ")} |`);
  }

  lines.push("", "## Figure Inventory", "");

  for (const domain of ["Load", "Solar"]) {
    const domainFiles = pngs.filter((file) => domainOf(file) === domain);
    if (!domainFiles.length) continue;
    detailsStart(lines, `${domain} (${domainFiles.length} figures)`);
    for (const country of ["BE", "DE", "FR"]) {
      const countryFiles = domainFiles.filter((file) => countryOf(file) === country && (!isComparisonSummary(file) || isHeatmap(file)));
      if (!countryFiles.length) continue;
      detailsStart(lines, `${country} (${countryFiles.length} figures)`);
      pushFigureTables(lines, countryFiles);
      detailsEnd(lines);
    }
    const comparisonFiles = domainFiles.filter(isComparisonSummary);
    if (comparisonFiles.length) {
      detailsStart(lines, `Comparison/summary (${comparisonFiles.length} figures)`);
      pushFigureTables(lines, comparisonFiles, 4, "Comparison/summary");
      detailsEnd(lines);
    }
    detailsEnd(lines);
  }

  const tsoFiles = pngs.filter((file) => domainOf(file) === "TSO forecast quality");
  if (tsoFiles.length) {
    detailsStart(lines, `TSO forecast quality (${tsoFiles.length} figures)`);
    for (const country of ["BE", "DE", "FR"]) {
      const countryFiles = tsoFiles.filter((file) => countryOf(file) === country && (!isComparisonSummary(file) || isHeatmap(file)));
      if (!countryFiles.length) continue;
      detailsStart(lines, `${country} (${countryFiles.length} figures)`);
      pushFigureTables(lines, countryFiles);
      detailsEnd(lines);
    }
    const comparisonFiles = tsoFiles.filter((file) => isComparisonSummary(file) || countryOf(file) === "multi-country");
    if (comparisonFiles.length) {
      detailsStart(lines, `Comparison/summary (${comparisonFiles.length} figures)`);
      pushFigureTables(lines, comparisonFiles, 4, "Comparison/summary");
      detailsEnd(lines);
    }
    detailsEnd(lines);
  }

  const windFiles = pngs.filter((file) => domainOf(file) === "Wind");
  if (windFiles.length) {
    detailsStart(lines, `Wind (${windFiles.length} figures)`);
    for (const segment of ["Onshore", "Offshore"]) {
      const segmentFiles = windFiles.filter((file) => windSegmentOf(file) === segment && (!isComparisonSummary(file) || isHeatmap(file)));
      if (!segmentFiles.length) continue;
      detailsStart(lines, `${segment} (${segmentFiles.length} figures)`);
      for (const country of ["BE", "DE", "FR"]) {
        const countryFiles = segmentFiles.filter((file) => countryOf(file) === country);
        if (!countryFiles.length) continue;
        detailsStart(lines, `${country} (${countryFiles.length} figures)`);
        pushFigureTables(lines, countryFiles, 5);
        detailsEnd(lines);
      }
      detailsEnd(lines);
    }
    const comparisonFiles = windFiles.filter((file) => isComparisonSummary(file) || windSegmentOf(file) === "Comparison/summary");
    if (comparisonFiles.length) {
      detailsStart(lines, `Comparison/summary (${comparisonFiles.length} figures)`);
      pushFigureTables(lines, comparisonFiles, 4, "Comparison/summary");
      detailsEnd(lines);
    }
    detailsEnd(lines);
  }

  return lines.join("\n");
}

const files = walk(root).map(rel).filter((file) => !file.startsWith(".git/")).sort();
fs.writeFileSync(path.join(root, "DATA_GUIDE.md"), makeDataGuide(files) + "\n");
fs.writeFileSync(path.join(root, "PICTURE_GUIDE.md"), makePictureGuide(files) + "\n");
console.log(`Generated guides for ${files.length} files.`);
