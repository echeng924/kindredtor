-- CREATE TABLE members (
--   id SERIAL PRIMARY KEY,
--   email VARCHAR NOT NULL UNIQUE,
--   password VARCHAR NOT NULL,
--   first_name VARCHAR NOT NULL,
--   last_name VARCHAR NOT NULL,
--   location VARCHAR NOT NULL,
--   current_title VARCHAR NOT NULL,
--   role VARCHAR NOT NULL,
--   current_industry VARCHAR,
--   interested_tech VARCHAR NOT NULL,
--   blurb TEXT NOT NULL
-- );

TRUNCATE TABLE members;
TRUNCATE TABLE matches;

INSERT INTO members (email, password, first_name, last_name, location, current_title, role, current_industry, interested_tech, blurb) VALUES('liz@test.com', 'password', 'Liz', 'Cheng', 'New York, NY', 'Web Developer', 'Mentor', 'Tech', 'JavaScript', 'help me find a job');
