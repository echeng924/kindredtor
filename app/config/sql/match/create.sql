INSERT INTO members (first_name, last_name, email, member_id) VALUES($1, $2, $3, $4) RETURNING *;
