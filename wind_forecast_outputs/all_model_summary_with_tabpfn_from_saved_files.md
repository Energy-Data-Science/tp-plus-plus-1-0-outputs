# Wind Forecast Summary With TabPFN

Generated from saved CSV summaries in `outputs/wind_forecast`.

| country   | variable      | model                       |        MAE |      RMSE |      MAPE |      R2 |   uncertainty_PICP |   uncertainty_MPIW |   uncertainty_CRPS_proxy |   stability_mean_abs_revision |
|:----------|:--------------|:----------------------------|-----------:|----------:|----------:|--------:|-------------------:|-------------------:|-------------------------:|------------------------------:|
| BE        | Wind_Offshore | Chronos2_NoCovariates       |   426.794  |   610.048 |  432.118  |  0.3322 |             0.6996 |           1262.63  |                 127.344  |                      106.192  |
| BE        | Wind_Offshore | Chronos2_Wind100mCovariates |   266.609  |   395.642 |  218.101  |  0.7191 |             0.7796 |            786.129 |                  83.8119 |                       64.0926 |
| BE        | Wind_Offshore | TSO                         |   146.022  |   227.327 |   89.0792 |  0.9075 |             0      |              0     |                  73.0109 |                      nan      |
| BE        | Wind_Offshore | TabPFN_NoCovariates         |   488.419  |   710.315 |  579.94   |  0.0947 |             0.356  |            430.718 |                 196.654  |                      109.17   |
| BE        | Wind_Offshore | TabPFN_Wind100mCovariates   |   383.197  |   569.313 |  362.35   |  0.4184 |             0.3994 |            406.255 |                 148.406  |                       77.2409 |
| BE        | Wind_Offshore | Weekly_Persistence          |   785.572  |  1013.77  | 1035.56   | -0.8404 |             0      |              0     |                 392.786  |                      nan      |
| BE        | Wind_Offshore | XGBoost_NoCovariates        |   429.693  |   580.505 |  549.336  |  0.3953 |             0.6684 |            906.01  |                 144.76   |                       96.0712 |
| BE        | Wind_Offshore | XGBoost_Wind100mCovariates  |   344.666  |   477.814 |  398.783  |  0.5903 |             0.6987 |            765.845 |                 116.597  |                       69.0166 |
| BE        | Wind_Onshore  | Chronos2_NoCovariates       |   307.068  |   447.928 |  185.367  |  0.4544 |             0.743  |            894.209 |                  94.0311 |                       79.9949 |
| BE        | Wind_Onshore  | Chronos2_Wind100mCovariates |   103.02   |   147.814 |   54.1229 |  0.9406 |             0.7984 |            327.378 |                  32.7757 |                       27.1436 |
| BE        | Wind_Onshore  | TSO                         |   100.265  |   145.48  |   40.043  |  0.9427 |             0      |              0     |                  50.1326 |                      nan      |
| BE        | Wind_Onshore  | TabPFN_NoCovariates         |   370.627  |   549.796 |  222.855  |  0.1779 |             0.2789 |            274.659 |                 155.667  |                       97.6728 |
| BE        | Wind_Onshore  | TabPFN_Wind100mCovariates   |   240.031  |   362.625 |  121.787  |  0.6424 |             0.3208 |            224.798 |                  96.0052 |                       54.2004 |
| BE        | Wind_Onshore  | Weekly_Persistence          |   606.423  |   816.541 |  574.501  | -0.8048 |             0      |              0     |                 303.211  |                      nan      |
| BE        | Wind_Onshore  | XGBoost_NoCovariates        |   316.19   |   463.082 |  231.575  |  0.4168 |             0.7558 |            773.453 |                 108.43   |                       63.5547 |
| BE        | Wind_Onshore  | XGBoost_Wind100mCovariates  |   185.826  |   267.51  |  131.442  |  0.8054 |             0.7478 |            464.865 |                  63.7338 |                       24.9547 |
| DE        | Wind_Offshore | Chronos2_NoCovariates       |  1146.12   |  1506.43  |  177.377  |  0.3679 |             0.7581 |           3485.5   |                 347.494  |                      297.776  |
| DE        | Wind_Offshore | Chronos2_Wind100mCovariates |  1079.68   |  1420.29  |  171.879  |  0.4382 |             0.7103 |           2940.3   |                 334.322  |                      250.017  |
| DE        | Wind_Offshore | TSO                         |   574.058  |   813.938 |   38.9232 |  0.8154 |             0      |              0     |                 287.029  |                      nan      |
| DE        | Wind_Offshore | TabPFN_Wind100mCovariates   |  1294.05   |  1743.04  |  158.483  |  0.1538 |             0.2983 |           1081.79  |                 526.606  |                      270.226  |
| DE        | Wind_Offshore | Weekly_Persistence          |  1958.02   |  2454.45  |  428.697  | -0.6785 |             0      |              0     |                 979.009  |                      nan      |
| DE        | Wind_Offshore | XGBoost_NoCovariates        |  1192.4    |  1600.9   |  201.52   |  0.2862 |             0.6661 |           2626.41  |                 406.12   |                      265.546  |
| DE        | Wind_Offshore | XGBoost_Wind100mCovariates  |  1147.22   |  1536.27  |  180.659  |  0.3426 |             0.662  |           2522.37  |                 390.924  |                      263.397  |
| DE        | Wind_Onshore  | Chronos2_NoCovariates       |  4545.98   |  6390.83  |   66.1646 |  0.6168 |             0.7338 |          12797.5   |                1405.06   |                     1164.38   |
| DE        | Wind_Onshore  | Chronos2_Wind100mCovariates |  2649.81   |  3664.38  |   41.9782 |  0.874  |             0.7742 |           8082.31  |                 845.758  |                      646.897  |
| DE        | Wind_Onshore  | TSO                         |  1166.86   |  1651.62  |   13.5386 |  0.9744 |             0      |              0     |                 583.432  |                      nan      |
| DE        | Wind_Onshore  | TabPFN_Wind100mCovariates   |  4691.67   |  6730.69  |   63.5631 |  0.5749 |             0.226  |           2705.01  |                2038.17   |                     1468.68   |
| DE        | Wind_Onshore  | Weekly_Persistence          | 10217.7    | 13451.6   |  187.324  | -0.6959 |             0      |              0     |                5108.87   |                      nan      |
| DE        | Wind_Onshore  | XGBoost_NoCovariates        |  4822.4    |  6747.31  |   73.7083 |  0.5728 |             0.7083 |          11520.6   |                1655.31   |                      835.71   |
| DE        | Wind_Onshore  | XGBoost_Wind100mCovariates  |  4092.94   |  5778.81  |   59.9967 |  0.6867 |             0.7126 |          10064.5   |                1410.91   |                      696.69   |
| FR        | Wind_Offshore | Chronos2_NoCovariates       |   195.888  |   281.123 |  149.706  |  0.4642 |             0.7437 |            600.741 |                  60.5247 |                       50.6944 |
| FR        | Wind_Offshore | Chronos2_Wind100mCovariates |   172.188  |   247.628 |  142.91   |  0.5843 |             0.7104 |            466.219 |                  54.5945 |                       43.3276 |
| FR        | Wind_Offshore | TSO                         |    93.3831 |   133.988 |   57.7202 |  0.878  |             0.001  |              0     |                  46.6916 |                      nan      |
| FR        | Wind_Offshore | TabPFN_NoCovariates         |   222.169  |   327.901 |  161.356  |  0.2711 |             0.365  |            215.726 |                  89.6768 |                       32.6116 |
| FR        | Wind_Offshore | TabPFN_Wind100mCovariates   |   212.632  |   311.728 |  152.372  |  0.3412 |             0.3353 |            191.851 |                  86.1402 |                       25.8198 |
| FR        | Wind_Offshore | Weekly_Persistence          |   407.88   |   533.347 |  429.879  | -0.9324 |             0.001  |              0     |                 203.94   |                      nan      |
| FR        | Wind_Offshore | XGBoost_NoCovariates        |   290.393  |   413.632 |  165.654  | -0.1599 |             0.733  |            614.496 |                  97.9765 |                       22.0928 |
| FR        | Wind_Offshore | XGBoost_Wind100mCovariates  |   297.552  |   427.211 |  135.935  | -0.2373 |             0.7321 |            601.259 |                 100.006  |                       19.9565 |
| FR        | Wind_Onshore  | Chronos2_NoCovariates       |  1797.15   |  2668.31  |   47.2068 |  0.5187 |             0.732  |           4718.66  |                 572.155  |                      440.624  |
| FR        | Wind_Onshore  | Chronos2_Wind100mCovariates |  1474.83   |  2147.83  |   39.2436 |  0.6882 |             0.6932 |           3670.97  |                 477.983  |                      339.008  |
| FR        | Wind_Onshore  | TSO                         |   792.442  |  1255.61  |   19.86   |  0.8935 |             0      |              0     |                 396.221  |                      nan      |
| FR        | Wind_Onshore  | TabPFN_NoCovariates         |  1946.16   |  2958.94  |   50.2021 |  0.4082 |             0.2473 |           1166.51  |                 838.672  |                      640.565  |
| FR        | Wind_Onshore  | TabPFN_Wind100mCovariates   |  1733.96   |  2600.87  |   45.2364 |  0.5428 |             0.2832 |           1254.45  |                 731.798  |                      511.512  |
| FR        | Wind_Onshore  | Weekly_Persistence          |  3752.7    |  5195.32  |  112.337  | -0.824  |             0.0002 |              0     |                1876.35   |                      nan      |
| FR        | Wind_Onshore  | XGBoost_NoCovariates        |  1669.48   |  2476.06  |   44.4093 |  0.5856 |             0.7535 |           4538.42  |                 587.526  |                      311.814  |
| FR        | Wind_Onshore  | XGBoost_Wind100mCovariates  |  1502.73   |  2233.87  |   38.6252 |  0.6627 |             0.763  |           4135.24  |                 529.378  |                      269.749  |