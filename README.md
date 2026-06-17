# TP++ 1.0 Outputs

This repository showcases the refreshed TP++ 1.0 forecasting outputs for electricity load, solar generation, and wind generation across Belgium (BE), Germany (DE), and France (FR).

The previous output publication has been archived as `tp-plus-plus-0-0-outputs`. This repository contains the newer daily-18UTC load configuration, the latest solar weather/TSO covariate configuration, and the latest selected wind comparison/onshore/offshore output sets.

## Repository Layout

| Folder | Contents |
| --- | --- |
| `load_forecast_outputs/` | Daily 18UTC 2024-2025 load CSV outputs and figures, including best-family/baseline figures, updated scatterplots, and rolling-calibration uncertainty heatmaps. |
| `solar_forecast_outputs/latest_weather_tso_cov_outputs/` | Latest solar CSV outputs and figures, including accuracy, monthly, production-level, uncertainty, comparison, monthly RMSE, MAE-reduction, and updated Belgium heatmap results. |
| `solar_forecast_outputs/scatterplots/` | Scatterplot figures from earlier solar comparison runs for Chronos2, XGBoost, TSO, persistence, and TabPFN. |
| `wind_forecast_outputs/latest_selected_wind_comparisons/` | Latest selected wind comparison CSVs, LaTeX tables, boxplots, monthly RMSE plots, MAE-reduction plots, and BE uncertainty heatmaps. |
| `wind_forecast_outputs/onshore_wind_2021_2025_daily18/` | Latest onshore wind outputs by country/model, including predictions, accuracy, uncertainty, summaries, and reduced selected cases. |
| `wind_forecast_outputs/offshore_wind_2021_2025_daily18_offshore_weather/` | Latest offshore wind outputs by country/model, including predictions, accuracy, uncertainty, summaries, weather metadata, and reduced selected cases. |
| `wind_forecast_outputs/wind_forecast/` | Existing wind scatterplot and comparison outputs from the earlier run. |
| `wind_forecast_outputs/wind_forecast_3h_cutoffs/` | Existing 3h-cutoff wind scatterplot and summary outputs. |
| `DATA_GUIDE.md` | Categorized inventory of CSV and table artifacts. |
| `PICTURE_GUIDE.md` | Expandable guide to PNG figures by domain, country, wind type, and comparison/summary category. |

## Result Categories

| Category | What it contains |
| --- | --- |
| Accuracy | Error metrics, scatterplots, boxplots, RMSE/MAE/MAPE summaries, and forecast-vs-actual diagnostics. |
| Stability | Forecast revision magnitude, revision-by-hour plots, revision distributions, and stability summary tables. |
| Uncertainty | PICP/coverage summaries, CRPS/interval metrics, uncertainty heatmaps, and rolling-calibration results. |
| Predictions and context | Day-ahead forecasts, model predictions, actual values, context files, and covariate metadata. |
| Comparison/summary | Cross-model, cross-country, reduced selected cases, publication-style figures, and summary tables. |

## Start Here

1. Open [`PICTURE_GUIDE.md`](PICTURE_GUIDE.md) for the expandable figure guide.
2. Open [`DATA_GUIDE.md`](DATA_GUIDE.md) for the categorized CSV/table inventory.
3. Use the top-level output folders when you need the original artifact organization.

## Notes for GitHub

This repository uses Git LFS for CSV and PNG artifacts.

```bash
git lfs install
git lfs track "*.csv"
git lfs track "*.png"
```

## Regenerating Guides

The guides are generated from the current file tree:

```bash
node scripts/generate_catalogs.js
```
