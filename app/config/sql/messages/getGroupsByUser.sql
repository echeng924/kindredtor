select first_name, last_name, members.id member_id, message_group.id group_id
from message_group, members
where message_group.member_id1=$1
and members.id=message_group.member_id2
union
select first_name, last_name, members.id member_id, message_group.id group_id
from message_group, members
where message_group.member_id2=$1
and members.id=message_group.member_id1;
