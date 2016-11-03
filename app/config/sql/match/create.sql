INSERT INTO matches (mentor_id, mentee_id) VALUES($1, $2) RETURNING *;
