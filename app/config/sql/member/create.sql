INSERT INTO members (email, password, first_name, last_name, current_title, role, current_industry, interested_tech, blurb, picture) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;
