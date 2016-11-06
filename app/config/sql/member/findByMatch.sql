SELECT members.id, email, first_name, last_name, current_title, role, current_industry, interested_tech, blurb FROM matches, members WHERE matches.member_id2 = members.id and matches.member_id1=$1
union
SELECT members.id, email, first_name, last_name, current_title, role, current_industry, interested_tech, blurb FROM matches, members WHERE matches.member_id1 = members.id and matches.member_id2=$1;
