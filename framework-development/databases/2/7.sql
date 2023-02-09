SELECT Filtration, avg(CleanDeep) 
FROM Roomba 
WHERE Filtration = 'High Efficiency' 
GROUP BY Filtration;