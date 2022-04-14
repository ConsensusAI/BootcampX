SELECT day, COUNT(*) as total_assigments
FROM assignments
GROUP BY day
ORDER BY day;