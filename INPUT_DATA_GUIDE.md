# Input Data Guide

This guide explains the input data used to produce the latest TP++ 1.0 forecast outputs. It complements `DATA_GUIDE.md` and `PICTURE_GUIDE.md`, which inventory generated result files.

The weather-input reference used for the latest results is `weather_data_for_results_260612`. To keep the repository lightweight, the full raw weather covariate files are not duplicated here. Instead, the repository stores the metadata needed to understand the inputs under `input_data_reference/weather_data_for_results_260612/`.

## Metadata Files

| File | Purpose |
| --- | --- |
| `input_data_reference/weather_data_for_results_260612/README.md` | Source-folder summary and high-level usage notes. |
| `input_data_reference/weather_data_for_results_260612/weather_data_metadata.csv` | File-level provenance, variables, coordinates, operators/TSOs, sources, and units. |
| `input_data_reference/weather_data_for_results_260612/weather_locations_by_target.csv` | Country and target-specific weather locations used in the analyses. |
| `input_data_reference/weather_data_for_results_260612/weather_usage_by_target.json` | Target-level usage notes, analysis notebook references, testing periods, and processing rules. |

## Domain Overview

| Repository domain | Input-data role |
| --- | --- |
| TSO forecast | Uses historical TSO/ENTSO-E forecast and observed target series for forecast-quality diagnostics. It does not use the ARX weather covariate files listed below. |
| ARX model forecast of load | Uses Open-Meteo temperature and humidity covariates for Belgium, France, and Germany. |
| ARX model forecast of solar | Uses GFS global solar weather covariates at selected country/operator points. |
| ARX model forecast of wind | Uses onshore 100m wind covariates and offshore weather covariates for wind forecast configurations. |

## TSO Forecast Quality Inputs

The TSO forecast-quality outputs compare historical TSO forecasts against observed target values and persistence-style baselines. These diagnostics are organized in `tso_forecast_quality_outputs/`. They are separate from the ARX weather-covariate inputs because they assess the quality of the external TSO forecast itself rather than using weather variables to train ARX models.

## ARX Model Forecast of Load

Load forecast weather inputs use Open-Meteo temperature and relative humidity data at one representative point per country.

| Country | Representative location | Coordinates | Variables | Source file pattern |
| --- | --- | --- | --- | --- |
| BE | Belgium / Brussels | 50.85, 4.35 | `temperature_2m`, `relative_humidity_2m` | `load/BE/openmeteo_temp_humidity_BE.csv` |
| FR | France center | 46.6, 2.2 | `temperature_2m`, `relative_humidity_2m` | `load/FR/openmeteo_temp_humidity_FR.csv` |
| DE | Germany center | 51.2, 10.5 | `temperature_2m`, `relative_humidity_2m` | `load/DE/openmeteo_temp_humidity_DE.csv` |

The latest load analysis uses the 2024-2025 testing period. The metadata points to the analysis notebook `../Load_forecast_new/BE_FR_DE_load_forecast_daily_18utc_featurefirst.ipynb`.

## ARX Model Forecast of Solar

Solar forecast weather inputs use GFS global covariates for selected solar-relevant points. The main variables are `shortwave_radiation` and `temperature_2m`. Columns matching the selected coordinate tokens are averaged across points, while point-level columns are also retained in the analysis dataset.

| Country | Operator or TSO | Coordinates used | Source file |
| --- | --- | --- | --- |
| BE | Elia | 51.253, 4.453; 51.019, 3.75; 51.019, 3.164; 51.019, 5.391 | `solar/BE/Elia/gfs_global_BE_solar.parquet` |
| FR | RTE | 44.692, -0.82; 49.613, 3.75; 48.793, 5.977; 44.107, 0.0 | `solar/FR/RTE/gfs_global_FR_solar.parquet` |
| DE | 50Hertz | 52.659, 14.18 | `solar/DE/50Hertz/gfs_global_DE_solar.parquet` |
| DE | Amprion | 51.604, 6.914 | `solar/DE/Amprion/gfs_global_DE_solar.parquet` |
| DE | TenneT | 54.65, 9.375 | `solar/DE/TenneT/gfs_global_DE_solar.parquet` |
| DE | TransnetBW | 49.73, 9.492 | `solar/DE/TransnetBW/gfs_global_DE_solar.parquet` |

The latest solar analysis uses the 2024-2025 testing period. The metadata points to the analysis notebook `../Solar_forecast_tabpfn_new/XY_solar_forecast_weather_tso_cov_2024_2025.ipynb`.

## ARX Model Forecast of Wind

Wind forecast inputs are split into onshore and offshore weather covariates.

### Onshore Wind

Onshore wind configurations use 100m wind covariates from CSV files. The main variables are `wind_speed_100m_ms` and `wind_direction_100m_deg`. The files are organized by country as `wind_onshore/{country}/wind_100m_{country}.csv`, with 2021 and 2025 supplement files where present.

| Country | Source file pattern | Metadata |
| --- | --- | --- |
| BE | `wind_onshore/BE/wind_100m_BE.csv`, `wind_100m_2021_BE.csv`, `wind_100m_2025_BE.csv` | `wind_onshore/metadata/wind_100m_metadata.csv` |
| FR | `wind_onshore/FR/wind_100m_FR.csv`, `wind_100m_2021_FR.csv`, `wind_100m_2025_FR.csv` | `wind_onshore/metadata/wind_100m_metadata.csv` |
| DE | `wind_onshore/DE/wind_100m_DE.csv`, `wind_100m_2021_DE.csv`, `wind_100m_2025_DE.csv` | `wind_onshore/metadata/wind_100m_metadata.csv` |

The latest onshore wind analysis uses the 2024-2025 testing period. The metadata points to the analysis notebook `../Wind_forecast_new/onshore_wind_forecast_2021_2025_daily18.ipynb`.

### Offshore Wind

Offshore wind configurations use GFS global offshore weather covariates. Country-specific offshore weather columns are resolved in the analysis notebook and then prefixed with `offshore_` after processing. These covariates are used in the `OffshoreWeather` and `OffshoreWeather_TSOForecast` cases.

| Country | Operators or TSOs | Source files | Metadata |
| --- | --- | --- | --- |
| BE | Elia | `wind_offshore/BE/Elia/gfs_global_BE_offshore.parquet` | `wind_offshore/BE/BE_offshore_weather_covariate_metadata.csv` |
| FR | RTE | `wind_offshore/FR/RTE/gfs_global_FR_offshore.parquet` | `wind_offshore/FR/FR_offshore_weather_covariate_metadata.csv` |
| DE | 50Hertz, TenneT | `wind_offshore/DE/50Hertz/gfs_global_DE_offshore.parquet`, `wind_offshore/DE/TenneT/gfs_global_DE_offshore.parquet` | `wind_offshore/DE/DE_offshore_weather_covariate_metadata.csv` |

The latest offshore wind analysis uses the 2024-2025 testing period. The metadata points to the analysis notebook `../Wind_forecast_new/offshore_wind_forecast_2021_2025_daily18_offshore_weather.ipynb`.

## How To Use This Guide

Use this file to understand which weather inputs support each result domain. Use `weather_data_metadata.csv` when you need exact provenance, coordinates, units, source models, or operator/TSO labels. Use `weather_usage_by_target.json` when you need the processing logic and notebook lineage for each forecasting task.
