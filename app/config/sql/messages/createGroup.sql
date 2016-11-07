insert into message_group (member_id1, member_id2) values ($1, $2) RETURNING *;
