# TP++ 1.0 Outputs

This repository showcases TP++ 1.0 forecasting outputs for electricity load, solar generation, and wind generation across Belgium (BE), Germany (DE), and France (FR).

The artifacts include model predictions, accuracy diagnostics, stability/revision analyses, uncertainty summaries, and publication-ready figures.

## Repository Layout

| Folder | Contents |
| --- | --- |
| `load_forecast_outputs/` | Load forecasting CSV outputs and figures for TSO baselines, persistence, Ridge, Chronos2, and TabPFN variants. |
| `solar_forecast_outputs/` | Solar forecasting outputs for TabPFN, Chronos2, XGBoost, persistence, and TSO comparisons. |
| `wind_forecast_outputs/` | Wind onshore/offshore outputs by country, model, metric family, and forecast setup. |
| `DATA_GUIDE.md` | Categorized CSV inventory by domain and analysis type. |
| `PICTURE_GUIDE.md` | Classification and guide to the PNG figures. |

## Result Categories

| Category | What it contains |
| --- | --- |
| Accuracy | Error metrics, scatter plots, hourly profiles, MAPE/MAE summaries, and forecast-vs-actual diagnostics. |
| Stability | Forecast revision magnitude, revision-by-hour plots, revision distributions, and stability summary tables. |
| Uncertainty | PICP/coverage summaries, uncertainty heatmaps, monthly uncertainty profiles, and uncertainty badness files. |
| Predictions and context | Day-ahead forecasts, model predictions, actual values, and context/test input files. |
| Comparison and summary | Cross-model, cross-country, and publication-style summary figures/tables. |

## Start Here

1. Open [`PICTURE_GUIDE.md`](PICTURE_GUIDE.md) for a classified guide to every figure.
2. Open [`DATA_GUIDE.md`](DATA_GUIDE.md) for categorized CSV artifacts.
3. Use the top-level output folders when you need the original artifact organization.

## Notes for GitHub

This repository contains large result files. Several CSVs exceed GitHub's 100 MB per-file limit, so Git LFS is required before pushing all artifacts to GitHub.

Recommended setup:

```bash
git lfs install
git lfs track "*.csv"
git lfs track "*.png"
```

Then commit `.gitattributes` together with the outputs.

## Regenerating Guides

The guides are generated from the current file tree:

```bash
node scripts/generate_catalogs.js
```
