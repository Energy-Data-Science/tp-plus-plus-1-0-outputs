# Data Guide

CSV artifacts are grouped by the same research domains used in the output folders. Within each domain, files are classified by analysis type so readers can jump directly to forecasts, accuracy, stability, and uncertainty results.

## Category Map

| Category | Folder | CSV files | Typical contents |
| --- | --- | ---: | --- |
| Load | `load_forecast_outputs/` | 39 | Predictions and context, Accuracy, Stability, Uncertainty |
| Solar | `solar_forecast_outputs/` | 122 | Accuracy, Stability, Predictions and context, Uncertainty |
| Wind | `wind_forecast_outputs/` | 412 | Accuracy, Predictions and context, Stability, Uncertainty, Comparison and summary |

## CSV Inventory

### Load

#### Accuracy

| File | Country | Model or scope |
| --- | --- | --- |
| [load_forecast_outputs/csv/accuracy_mape_matrix.csv](load_forecast_outputs/csv/accuracy_mape_matrix.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/accuracy_metrics.csv](load_forecast_outputs/csv/accuracy_metrics.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/plotting_accuracy_metrics_from_individual_files.csv](load_forecast_outputs/csv/plotting_accuracy_metrics_from_individual_files.csv) | multi-country | multiple |

#### Predictions and context

| File | Country | Model or scope |
| --- | --- | --- |
| [load_forecast_outputs/csv/BE_forecast_Chronos2.csv](load_forecast_outputs/csv/BE_forecast_Chronos2.csv) | BE | Chronos2 |
| [load_forecast_outputs/csv/BE_forecast_Chronos2_opt.csv](load_forecast_outputs/csv/BE_forecast_Chronos2_opt.csv) | BE | Chronos2 |
| [load_forecast_outputs/csv/BE_forecast_Ridge.csv](load_forecast_outputs/csv/BE_forecast_Ridge.csv) | BE | Ridge |
| [load_forecast_outputs/csv/BE_forecast_Ridge_opt.csv](load_forecast_outputs/csv/BE_forecast_Ridge_opt.csv) | BE | Ridge |
| [load_forecast_outputs/csv/BE_forecast_TSO.csv](load_forecast_outputs/csv/BE_forecast_TSO.csv) | BE | TSO |
| [load_forecast_outputs/csv/BE_forecast_TabPFN.csv](load_forecast_outputs/csv/BE_forecast_TabPFN.csv) | BE | TabPFN |
| [load_forecast_outputs/csv/BE_forecast_TabPFN_opt.csv](load_forecast_outputs/csv/BE_forecast_TabPFN_opt.csv) | BE | TabPFN |
| [load_forecast_outputs/csv/BE_forecast_Weekly_Persistence.csv](load_forecast_outputs/csv/BE_forecast_Weekly_Persistence.csv) | BE | Weekly Persistence |
| [load_forecast_outputs/csv/DE_forecast_Chronos2.csv](load_forecast_outputs/csv/DE_forecast_Chronos2.csv) | DE | Chronos2 |
| [load_forecast_outputs/csv/DE_forecast_Chronos2_opt.csv](load_forecast_outputs/csv/DE_forecast_Chronos2_opt.csv) | DE | Chronos2 |
| [load_forecast_outputs/csv/DE_forecast_Ridge.csv](load_forecast_outputs/csv/DE_forecast_Ridge.csv) | DE | Ridge |
| [load_forecast_outputs/csv/DE_forecast_Ridge_opt.csv](load_forecast_outputs/csv/DE_forecast_Ridge_opt.csv) | DE | Ridge |
| [load_forecast_outputs/csv/DE_forecast_TSO.csv](load_forecast_outputs/csv/DE_forecast_TSO.csv) | DE | TSO |
| [load_forecast_outputs/csv/DE_forecast_TabPFN.csv](load_forecast_outputs/csv/DE_forecast_TabPFN.csv) | DE | TabPFN |
| [load_forecast_outputs/csv/DE_forecast_TabPFN_opt.csv](load_forecast_outputs/csv/DE_forecast_TabPFN_opt.csv) | DE | TabPFN |
| [load_forecast_outputs/csv/DE_forecast_Weekly_Persistence.csv](load_forecast_outputs/csv/DE_forecast_Weekly_Persistence.csv) | DE | Weekly Persistence |
| [load_forecast_outputs/csv/FR_forecast_Chronos2.csv](load_forecast_outputs/csv/FR_forecast_Chronos2.csv) | FR | Chronos2 |
| [load_forecast_outputs/csv/FR_forecast_Chronos2_opt.csv](load_forecast_outputs/csv/FR_forecast_Chronos2_opt.csv) | FR | Chronos2 |
| [load_forecast_outputs/csv/FR_forecast_Ridge.csv](load_forecast_outputs/csv/FR_forecast_Ridge.csv) | FR | Ridge |
| [load_forecast_outputs/csv/FR_forecast_Ridge_opt.csv](load_forecast_outputs/csv/FR_forecast_Ridge_opt.csv) | FR | Ridge |
| [load_forecast_outputs/csv/FR_forecast_TSO.csv](load_forecast_outputs/csv/FR_forecast_TSO.csv) | FR | TSO |
| [load_forecast_outputs/csv/FR_forecast_TabPFN.csv](load_forecast_outputs/csv/FR_forecast_TabPFN.csv) | FR | TabPFN |
| [load_forecast_outputs/csv/FR_forecast_TabPFN_opt.csv](load_forecast_outputs/csv/FR_forecast_TabPFN_opt.csv) | FR | TabPFN |
| [load_forecast_outputs/csv/FR_forecast_Weekly_Persistence.csv](load_forecast_outputs/csv/FR_forecast_Weekly_Persistence.csv) | FR | Weekly Persistence |
| [load_forecast_outputs/csv/all_model_forecasts.csv](load_forecast_outputs/csv/all_model_forecasts.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/all_model_forecasts_from_individual_files.csv](load_forecast_outputs/csv/all_model_forecasts_from_individual_files.csv) | multi-country | multiple |

#### Stability

| File | Country | Model or scope |
| --- | --- | --- |
| [load_forecast_outputs/csv/plotting_revision_detail_from_individual_files.csv](load_forecast_outputs/csv/plotting_revision_detail_from_individual_files.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/plotting_stability_metrics_from_individual_files.csv](load_forecast_outputs/csv/plotting_stability_metrics_from_individual_files.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/revision_detail.csv](load_forecast_outputs/csv/revision_detail.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/stability_metrics.csv](load_forecast_outputs/csv/stability_metrics.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/stability_revision_pct_matrix.csv](load_forecast_outputs/csv/stability_revision_pct_matrix.csv) | multi-country | multiple |

#### Uncertainty

| File | Country | Model or scope |
| --- | --- | --- |
| [load_forecast_outputs/csv/plotting_uncertainty_metrics_by_3h_block_from_individual_files.csv](load_forecast_outputs/csv/plotting_uncertainty_metrics_by_3h_block_from_individual_files.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/plotting_uncertainty_metrics_from_individual_files.csv](load_forecast_outputs/csv/plotting_uncertainty_metrics_from_individual_files.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/uncertainty_metrics.csv](load_forecast_outputs/csv/uncertainty_metrics.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/uncertainty_metrics_by_3h_block.csv](load_forecast_outputs/csv/uncertainty_metrics_by_3h_block.csv) | multi-country | multiple |
| [load_forecast_outputs/csv/uncertainty_picp_matrix.csv](load_forecast_outputs/csv/uncertainty_picp_matrix.csv) | multi-country | multiple |

### Solar

#### Accuracy

| File | Country | Model or scope |
| --- | --- | --- |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_AllModels_comparison_accuracy.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_AllModels_comparison_accuracy.csv) | BE | multiple |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Benchmark_accuracy_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Benchmark_accuracy_summary.csv) | BE | multiple |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_AllModels_comparison_accuracy.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_AllModels_comparison_accuracy.csv) | DE | multiple |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Benchmark_accuracy_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Benchmark_accuracy_summary.csv) | DE | multiple |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_accuracy_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_accuracy_summary.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_prediction_eval.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_prediction_eval.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_AllModels_comparison_accuracy.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_AllModels_comparison_accuracy.csv) | FR | multiple |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Benchmark_accuracy_summary.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Benchmark_accuracy_summary.csv) | FR | multiple |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_accuracy_hourly_mape.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_accuracy_hourly_mape.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_accuracy_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_accuracy_summary.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_results_eval.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_results_eval.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_hourly_mape.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_hourly_mape.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_summary.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_results_eval.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_results_eval.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_comparison_accuracy_metrics.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_comparison_accuracy_metrics.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_accuracy_hourly_mape.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_accuracy_hourly_mape.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_accuracy_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_accuracy_summary.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_results_eval.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_results_eval.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_hourly_mape.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_hourly_mape.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_accuracy_summary.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_results_eval.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_results_eval.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_comparison_accuracy_metrics.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_comparison_accuracy_metrics.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_accuracy_hourly_mape.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_accuracy_hourly_mape.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_accuracy_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_accuracy_summary.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_results_eval.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_results_eval.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_accuracy_hourly_mape.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_accuracy_hourly_mape.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_accuracy_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_accuracy_summary.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_results_eval.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_results_eval.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_comparison_accuracy_metrics.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_comparison_accuracy_metrics.csv) | FR | TabPFN |

#### Predictions and context

| File | Country | Model or scope |
| --- | --- | --- |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_context_test_sun_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_context_test_sun_metrics.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_context_test_sun_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_context_test_sun_metrics.csv) | DE | Chronos2 |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_results_predictions.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_results_predictions.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_results_predictions.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_results_predictions.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_results_predictions.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_results_predictions.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_results_predictions.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_results_predictions.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_results_predictions.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_results_predictions.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_results_predictions.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_results_predictions.csv) | FR | TabPFN |

#### Stability

| File | Country | Model or scope |
| --- | --- | --- |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_NoCovariate_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_NoCovariate_stability_details.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_NoCovariate_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_NoCovariate_stability_summary.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_SunCovariate_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_SunCovariate_stability_details.csv) | BE | Chronos2 SunCovariate |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_SunCovariate_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_SunCovariate_stability_summary.csv) | BE | Chronos2 SunCovariate |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_ZeroNight_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_ZeroNight_stability_details.csv) | BE | Chronos2 ZeroNight |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_ZeroNight_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_ZeroNight_stability_summary.csv) | BE | Chronos2 ZeroNight |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_comparison_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_comparison_stability_summary.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_stability_details.csv) | BE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_stability_summary.csv) | BE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_NoCovariate_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_NoCovariate_stability_details.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_NoCovariate_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_NoCovariate_stability_summary.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_SunCovariate_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_SunCovariate_stability_details.csv) | DE | Chronos2 SunCovariate |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_SunCovariate_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_SunCovariate_stability_summary.csv) | DE | Chronos2 SunCovariate |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_ZeroNight_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_ZeroNight_stability_details.csv) | DE | Chronos2 ZeroNight |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_ZeroNight_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_ZeroNight_stability_summary.csv) | DE | Chronos2 ZeroNight |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_comparison_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_comparison_stability_summary.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_stability_details.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_stability_summary.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_NoCovariate_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_NoCovariate_stability_details.csv) | FR | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_NoCovariate_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_NoCovariate_stability_summary.csv) | FR | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_SunCovariate_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_SunCovariate_stability_details.csv) | FR | Chronos2 SunCovariate |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_SunCovariate_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_SunCovariate_stability_summary.csv) | FR | Chronos2 SunCovariate |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_ZeroNight_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_ZeroNight_stability_details.csv) | FR | Chronos2 ZeroNight |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_ZeroNight_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_ZeroNight_stability_summary.csv) | FR | Chronos2 ZeroNight |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_stability_details.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_stability_details.csv) | FR | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_stability_summary.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_stability_summary.csv) | FR | XGBoost |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_stability_details.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_stability_details.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_stability_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_stability_summary.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_stability_details.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_stability_details.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_stability_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_stability_summary.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_stability_details.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_stability_details.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_stability_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_stability_summary.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_stability_details.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_stability_details.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_stability_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_stability_summary.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_stability_details.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_stability_details.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_stability_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_stability_summary.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_stability_details.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_stability_details.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_stability_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_stability_summary.csv) | FR | TabPFN |

#### Uncertainty

| File | Country | Model or scope |
| --- | --- | --- |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_cov_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_cov_uncertainty_full_df.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_nocov_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_nocov_uncertainty_full_df.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_uncertainty_badness.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_uncertainty_badness.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_uncertainty_monthly_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_uncertainty_monthly_metrics.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_uncertainty_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_Chronos2_uncertainty_summary.csv) | BE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_full_df.csv) | BE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_hourly_profile.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_hourly_profile.csv) | BE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_monthly_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_monthly_metrics.csv) | BE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_summary.csv](solar_forecast_outputs/other_models_solar_outputs/BE_Solar_XGBoost_uncertainty_summary.csv) | BE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_cov_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_cov_uncertainty_full_df.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_nocov_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_nocov_uncertainty_full_df.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_uncertainty_badness.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_uncertainty_badness.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_uncertainty_monthly_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_uncertainty_monthly_metrics.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_uncertainty_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_Chronos2_uncertainty_summary.csv) | DE | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_badness.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_badness.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_full_df.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_hourly_profile.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_hourly_profile.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_monthly.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_monthly.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_monthly_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_monthly_metrics.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_summary.csv](solar_forecast_outputs/other_models_solar_outputs/DE_Solar_XGBoost_uncertainty_summary.csv) | DE | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_cov_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_cov_uncertainty_full_df.csv) | FR | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_nocov_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_nocov_uncertainty_full_df.csv) | FR | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_uncertainty_badness.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_uncertainty_badness.csv) | FR | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_uncertainty_monthly_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_uncertainty_monthly_metrics.csv) | FR | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_uncertainty_summary.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_Chronos2_uncertainty_summary.csv) | FR | Chronos2 |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_full_df.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_full_df.csv) | FR | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_hourly_profile.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_hourly_profile.csv) | FR | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_monthly_metrics.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_monthly_metrics.csv) | FR | XGBoost |
| [solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_summary.csv](solar_forecast_outputs/other_models_solar_outputs/FR_Solar_XGBoost_uncertainty_summary.csv) | FR | XGBoost |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_uncertainty_badness.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_uncertainty_badness.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_uncertainty_monthly.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_uncertainty_monthly.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_uncertainty_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test0_NoCovariate_uncertainty_summary.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_badness.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_badness.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_monthly.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_monthly.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/BE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_summary.csv) | BE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_uncertainty_badness.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_uncertainty_badness.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_uncertainty_monthly.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_uncertainty_monthly.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_uncertainty_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test0_NoCovariate_uncertainty_summary.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_badness.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_badness.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_monthly.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_monthly.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/DE_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_summary.csv) | DE | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_uncertainty_badness.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_uncertainty_badness.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_uncertainty_monthly.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_uncertainty_monthly.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_uncertainty_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test0_NoCovariate_uncertainty_summary.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_badness.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_badness.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_monthly.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_monthly.csv) | FR | TabPFN |
| [solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_summary.csv](solar_forecast_outputs/tabpfn_solar_outputs/FR_Solar_TabPFN_Test2_SunExistCovariate_uncertainty_summary.csv) | FR | TabPFN |

### Wind

#### Accuracy

| File | Country | Model or scope |
| --- | --- | --- |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/accuracy/eval_df.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/accuracy/summary.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/summary.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/TSO/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/TSO/accuracy/eval_df.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Offshore/TSO/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/TSO/accuracy/hourly_mae.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Offshore/TSO/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TSO/accuracy/summary.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/accuracy/eval_df.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/accuracy/summary.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/summary.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/accuracy/eval_df.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/accuracy/hourly_mae.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/accuracy/summary.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/accuracy/eval_df.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/accuracy/summary.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/summary.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/accuracy/eval_df.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/accuracy/summary.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/summary.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/TSO/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/TSO/accuracy/eval_df.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Onshore/TSO/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/TSO/accuracy/hourly_mae.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Onshore/TSO/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TSO/accuracy/summary.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/accuracy/eval_df.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/accuracy/summary.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/summary.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/accuracy/eval_df.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/accuracy/hourly_mae.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/accuracy/summary.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/accuracy/eval_df.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/accuracy/summary.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/summary.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/accuracy/eval_df.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/accuracy/summary.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/summary.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/TSO/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Offshore/TSO/accuracy/eval_df.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Offshore/TSO/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Offshore/TSO/accuracy/hourly_mae.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Offshore/TSO/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/TSO/accuracy/summary.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/summary.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/accuracy/eval_df.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/accuracy/hourly_mae.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/accuracy/summary.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/accuracy/eval_df.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/accuracy/summary.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/summary.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/accuracy/eval_df.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/accuracy/summary.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/summary.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/TSO/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Onshore/TSO/accuracy/eval_df.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Onshore/TSO/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Onshore/TSO/accuracy/hourly_mae.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Onshore/TSO/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/TSO/accuracy/summary.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/summary.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/accuracy/eval_df.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/accuracy/hourly_mae.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/accuracy/summary.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/accuracy/eval_df.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/accuracy/summary.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/summary.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/accuracy/eval_df.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/accuracy/summary.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/accuracy/summary.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/TSO/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/TSO/accuracy/eval_df.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Offshore/TSO/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/TSO/accuracy/hourly_mae.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Offshore/TSO/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TSO/accuracy/summary.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/accuracy/eval_df.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/accuracy/summary.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/accuracy/summary.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/accuracy/eval_df.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/accuracy/hourly_mae.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/accuracy/summary.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/accuracy/eval_df.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/accuracy/summary.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/accuracy/summary.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/accuracy/eval_df.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/accuracy/hourly_mae.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/accuracy/summary.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/eval_df.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/hourly_mae.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/accuracy/summary.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/TSO/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/TSO/accuracy/eval_df.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Onshore/TSO/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/TSO/accuracy/hourly_mae.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Onshore/TSO/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TSO/accuracy/summary.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/accuracy/eval_df.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/accuracy/hourly_mae.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/accuracy/summary.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/eval_df.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/hourly_mae.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/accuracy/summary.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/accuracy/eval_df.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/accuracy/hourly_mae.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/accuracy/summary.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/accuracy/eval_df.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/accuracy/hourly_mae.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/accuracy/summary.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/eval_df.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/hourly_mae.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/accuracy/summary.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/accuracy_matrix.csv](wind_forecast_outputs/accuracy_matrix.csv) | multi-country | multiple |
| [wind_forecast_outputs/accuracy_matrix_from_saved_files.csv](wind_forecast_outputs/accuracy_matrix_from_saved_files.csv) | multi-country | multiple |
| [wind_forecast_outputs/accuracy_matrix_with_tabpfn.csv](wind_forecast_outputs/accuracy_matrix_with_tabpfn.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/all_model_accuracy_uncertainty_summary.csv](wind_forecast_outputs/all_model_accuracy_uncertainty_summary.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_MAE.csv](wind_forecast_outputs/matrix_MAE.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_MAPE.csv](wind_forecast_outputs/matrix_MAPE.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_with_tabpfn_MAE.csv](wind_forecast_outputs/matrix_with_tabpfn_MAE.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/matrix_with_tabpfn_MAPE.csv](wind_forecast_outputs/matrix_with_tabpfn_MAPE.csv) | multi-country | TabPFN |

#### Comparison and summary

| File | Country | Model or scope |
| --- | --- | --- |
| [wind_forecast_outputs/all_model_summary_from_saved_files.csv](wind_forecast_outputs/all_model_summary_from_saved_files.csv) | multi-country | multiple |
| [wind_forecast_outputs/all_model_summary_with_tabpfn_from_saved_files.csv](wind_forecast_outputs/all_model_summary_with_tabpfn_from_saved_files.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/matrix_R2.csv](wind_forecast_outputs/matrix_R2.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_RMSE.csv](wind_forecast_outputs/matrix_RMSE.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_n_samples.csv](wind_forecast_outputs/matrix_n_samples.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_with_tabpfn_R2.csv](wind_forecast_outputs/matrix_with_tabpfn_R2.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/matrix_with_tabpfn_RMSE.csv](wind_forecast_outputs/matrix_with_tabpfn_RMSE.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/overleaf_figures_flat/manifest.csv](wind_forecast_outputs/overleaf_figures_flat/manifest.csv) | multi-country | multiple |

#### Predictions and context

| File | Country | Model or scope |
| --- | --- | --- |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/context/context_test.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/context/context_test.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/predictions/day_ahead.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/context/context_test.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/context/context_test.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/predictions/day_ahead.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/predictions/day_ahead.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/context/context_test.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/context/context_test.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/predictions/day_ahead.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/context/context_test.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/context/context_test.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/predictions/day_ahead.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/predictions/day_ahead.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/context/context_test.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/context/context_test.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/predictions/day_ahead.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_NoCovariates/context/context_test.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_NoCovariates/context/context_test.csv) | DE | TabPFN NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/predictions/day_ahead.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/context/context_test.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/context/context_test.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/predictions/day_ahead.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_NoCovariates/context/context_test.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_NoCovariates/context/context_test.csv) | DE | TabPFN NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/predictions/day_ahead.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/context/context_test.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/context/context_test.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/predictions/day_ahead.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/context/context_test.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/context/context_test.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/predictions/day_ahead.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/predictions/day_ahead.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/context/context_test.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/context/context_test.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/predictions/day_ahead.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/predictions/day_ahead.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/context/context_test.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/context/context_test.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/predictions/day_ahead.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/predictions/day_ahead.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/predictions/day_ahead.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/predictions/day_ahead.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/best_chronos2_context_by_series.csv](wind_forecast_outputs/best_chronos2_context_by_series.csv) | multi-country | Chronos2 |
| [wind_forecast_outputs/best_tabpfn_context_by_series.csv](wind_forecast_outputs/best_tabpfn_context_by_series.csv) | multi-country | TabPFN |

#### Stability

| File | Country | Model or scope |
| --- | --- | --- |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/stability/details.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/stability/revision_by_hour.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/stability/summary.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/details.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/summary.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/stability/details.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/stability/revision_by_hour.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/stability/summary.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/details.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/summary.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/stability/details.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/stability/revision_by_hour.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/stability/summary.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/details.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/summary.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/stability/details.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/stability/revision_by_hour.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/stability/summary.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/details.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/summary.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/stability/details.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/stability/revision_by_hour.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/stability/summary.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/details.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/summary.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/stability/details.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/stability/revision_by_hour.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/stability/summary.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/details.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/summary.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/stability/details.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/stability/revision_by_hour.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/stability/summary.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/details.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/stability/summary.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/details.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/stability/summary.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/stability/details.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/stability/revision_by_hour.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/stability/summary.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/details.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/stability/summary.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/stability/details.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/stability/revision_by_hour.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/stability/summary.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/details.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/stability/summary.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/details.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/stability/summary.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/stability/details.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/stability/revision_by_hour.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/stability/summary.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/details.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/stability/summary.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/stability/details.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/stability/revision_by_hour.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/stability/summary.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/stability/details.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/stability/summary.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/stability/details.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/stability/revision_by_hour.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/stability/summary.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/stability/details.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/stability/summary.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/stability/details.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/stability/revision_by_hour.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/stability/summary.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/stability/details.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/stability/summary.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/stability/details.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/stability/revision_by_hour.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/stability/summary.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/stability/details.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/stability/revision_by_hour.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/stability/summary.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/stability/details.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/stability/revision_by_hour.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/stability/summary.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/stability/details.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/stability/revision_by_hour.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/stability/summary.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/stability/details.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/stability/revision_by_hour.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/stability/summary.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/stability/details.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/stability/details.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/stability/revision_by_hour.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/stability/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/stability/summary.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/matrix_stability_mean_abs_revision.csv](wind_forecast_outputs/matrix_stability_mean_abs_revision.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_stability_p95_abs_revision.csv](wind_forecast_outputs/matrix_stability_p95_abs_revision.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_with_tabpfn_stability_mean_abs_revision.csv](wind_forecast_outputs/matrix_with_tabpfn_stability_mean_abs_revision.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/matrix_with_tabpfn_stability_p95_abs_revision.csv](wind_forecast_outputs/matrix_with_tabpfn_stability_p95_abs_revision.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/stability_matrix_from_saved_files.csv](wind_forecast_outputs/stability_matrix_from_saved_files.csv) | multi-country | multiple |
| [wind_forecast_outputs/stability_matrix_with_tabpfn.csv](wind_forecast_outputs/stability_matrix_with_tabpfn.csv) | multi-country | TabPFN |

#### Uncertainty

| File | Country | Model or scope |
| --- | --- | --- |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/monthly.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/summary.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Offshore/TSO/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/TSO/uncertainty/monthly.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Offshore/TSO/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TSO/uncertainty/summary.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/uncertainty/monthly.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_NoCovariates/uncertainty/summary.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/uncertainty/monthly.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/Weekly_Persistence/uncertainty/summary.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/monthly.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/summary.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/monthly.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/summary.csv) | BE | Chronos2 NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv) | BE | Chronos2 |
| [wind_forecast_outputs/BE/Wind_Onshore/TSO/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/TSO/uncertainty/monthly.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Onshore/TSO/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TSO/uncertainty/summary.csv) | BE | TSO |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/uncertainty/monthly.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_NoCovariates/uncertainty/summary.csv) | BE | TabPFN NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv) | BE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/uncertainty/monthly.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/Weekly_Persistence/uncertainty/summary.csv) | BE | Weekly Persistence |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/monthly.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/summary.csv) | BE | XGBoost NoCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/BE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv) | BE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/monthly.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_NoCovariates/uncertainty/summary.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Offshore/TSO/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Offshore/TSO/uncertainty/monthly.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Offshore/TSO/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/TSO/uncertainty/summary.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/uncertainty/monthly.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/Weekly_Persistence/uncertainty/summary.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/monthly.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_NoCovariates/uncertainty/summary.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/monthly.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_NoCovariates/uncertainty/summary.csv) | DE | Chronos2 NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv) | DE | Chronos2 |
| [wind_forecast_outputs/DE/Wind_Onshore/TSO/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Onshore/TSO/uncertainty/monthly.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Onshore/TSO/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/TSO/uncertainty/summary.csv) | DE | TSO |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv) | DE | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/uncertainty/monthly.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/Weekly_Persistence/uncertainty/summary.csv) | DE | Weekly Persistence |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/monthly.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_NoCovariates/uncertainty/summary.csv) | DE | XGBoost NoCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/DE/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv) | DE | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/uncertainty/monthly.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_NoCovariates/uncertainty/summary.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Offshore/TSO/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/TSO/uncertainty/monthly.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Offshore/TSO/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TSO/uncertainty/summary.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/uncertainty/monthly.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_NoCovariates/uncertainty/summary.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/uncertainty/monthly.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/Weekly_Persistence/uncertainty/summary.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/uncertainty/monthly.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_NoCovariates/uncertainty/summary.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Offshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/uncertainty/monthly.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_NoCovariates/uncertainty/summary.csv) | FR | Chronos2 NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/monthly.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Chronos2_Wind100mCovariates/uncertainty/summary.csv) | FR | Chronos2 |
| [wind_forecast_outputs/FR/Wind_Onshore/TSO/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/TSO/uncertainty/monthly.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Onshore/TSO/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TSO/uncertainty/summary.csv) | FR | TSO |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/uncertainty/monthly.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_NoCovariates/uncertainty/summary.csv) | FR | TabPFN NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/monthly.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/TabPFN_Wind100mCovariates/uncertainty/summary.csv) | FR | TabPFN Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/uncertainty/monthly.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/Weekly_Persistence/uncertainty/summary.csv) | FR | Weekly Persistence |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/uncertainty/monthly.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_NoCovariates/uncertainty/summary.csv) | FR | XGBoost NoCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/monthly.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv](wind_forecast_outputs/FR/Wind_Onshore/XGBoost_Wind100mCovariates/uncertainty/summary.csv) | FR | XGBoost Wind100mCovariates |
| [wind_forecast_outputs/matrix_uncertainty_CRPS_proxy.csv](wind_forecast_outputs/matrix_uncertainty_CRPS_proxy.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_uncertainty_MPIW.csv](wind_forecast_outputs/matrix_uncertainty_MPIW.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_uncertainty_PICP.csv](wind_forecast_outputs/matrix_uncertainty_PICP.csv) | multi-country | multiple |
| [wind_forecast_outputs/matrix_with_tabpfn_uncertainty_CRPS_proxy.csv](wind_forecast_outputs/matrix_with_tabpfn_uncertainty_CRPS_proxy.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/matrix_with_tabpfn_uncertainty_MPIW.csv](wind_forecast_outputs/matrix_with_tabpfn_uncertainty_MPIW.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/matrix_with_tabpfn_uncertainty_PICP.csv](wind_forecast_outputs/matrix_with_tabpfn_uncertainty_PICP.csv) | multi-country | TabPFN |
| [wind_forecast_outputs/summary_plots/Wind_Forecast_uncertainty_by_3h_long.csv](wind_forecast_outputs/summary_plots/Wind_Forecast_uncertainty_by_3h_long.csv) | multi-country | multiple |
| [wind_forecast_outputs/uncertainty_matrix.csv](wind_forecast_outputs/uncertainty_matrix.csv) | multi-country | multiple |
| [wind_forecast_outputs/uncertainty_matrix_from_saved_files.csv](wind_forecast_outputs/uncertainty_matrix_from_saved_files.csv) | multi-country | multiple |
| [wind_forecast_outputs/uncertainty_matrix_with_tabpfn.csv](wind_forecast_outputs/uncertainty_matrix_with_tabpfn.csv) | multi-country | TabPFN |

