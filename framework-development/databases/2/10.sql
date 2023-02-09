SELECT Model, (Battery / RunTime) AS BatteryEfficiency 
FROM Roomba 
ORDER BY BatteryEfficiency DESC;