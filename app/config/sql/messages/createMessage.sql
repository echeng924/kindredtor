insert into message_text (group_id, sender_id, text) values ($1, $2, $3) RETURNING *;
