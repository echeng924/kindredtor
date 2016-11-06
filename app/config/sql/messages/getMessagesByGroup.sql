select first_name, last_name, message_text.sender_id, message_text.text
from message_group, message_text, members
where message_group.id=message_text.group_id
and members.id=message_text.sender_id
and message_group.id=$1
order by message_text.id asc;
