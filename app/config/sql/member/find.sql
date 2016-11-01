SELECT * FROM members WHERE interested_tech=$1 AND location=$2 ORDER BY random() LIMIT 1;
