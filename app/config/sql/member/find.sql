SELECT * FROM members WHERE interested_tech=$1 AND role=$2 ORDER BY random() LIMIT 1;
