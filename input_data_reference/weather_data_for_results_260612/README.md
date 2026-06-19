# Weather data for latest forecast results (260612)

This folder collects weather covariate input files used by the latest load, solar, onshore wind, and offshore wind forecast analyses.

See `weather_data_metadata.csv` for file-level provenance and `weather_usage_by_target.json` for target-level usage notes.

## Target usage

### load

- Latest notebook: `../Load_forecast_new/BE_FR_DE_load_forecast_daily_18utc_featurefirst.ipynb`

- Testing period: 2024-2025

- Variables: temperature/humidity fields as provided by Open-Meteo CSVs

- Source files: openmeteo_temp_humidity_{BE,FR,DE}.csv



### solar

- Latest notebook: `../Solar_forecast_tabpfn_new/XY_solar_forecast_weather_tso_cov_2024_2025.ipynb`

- Testing period: 2024-2025

- Variables: shortwave_radiation, temperature_2m

- Processing: Columns matching requested coordinate tokens are averaged across selected points; point-level columns are also retained in the analysis dataset.



### wind_onshore

- Latest notebook: `../Wind_forecast_new/onshore_wind_forecast_2021_2025_daily18.ipynb`

- Testing period: 2024-2025

- Variables: 100m wind covariates as provided in CSV files

- Processing: Used as Wind100m covariate cases in onshore wind models.

- Source files: wind_100m_{country}.csv plus 2021/2025 supplements where present



### wind_offshore

- Latest notebook: `../Wind_forecast_new/offshore_wind_forecast_2021_2025_daily18_offshore_weather.ipynb`

- Testing period: 2024-2025

- Variables: offshore weather covariates selected by notebook and prefixed offshore_ after processing

- Processing: Country-specific offshore weather columns are resolved by country_weather_cols() and used in OffshoreWeather and OffshoreWeather_TSOForecast cases.

- Source files: gfs_global_*_offshore.parquet plus generated *_offshore_weather_covariate_metadata.csv


