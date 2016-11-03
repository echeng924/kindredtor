CREATE DATABASE networking;

\c networking

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  current_title VARCHAR NOT NULL,
  role VARCHAR NOT NULL,
  current_industry VARCHAR,
  interested_tech VARCHAR NOT NULL,
  blurb TEXT NOT NULL,
  picture BYTEA NOT NULL
);

--if possible multiple selection for tech...change for primary tech used

-- CREATE TABLE matches (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR NOT NULL,
--   last_name VARCHAR NOT NULL,
--   email VARCHAR NOT NULL,
--   interested_tech VARCHAR NOT NULL,
--   member_id VARCHAR NOT NULL
-- );

CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  mentor_id INTEGER NOT NULL,
  mentee_id INTEGER NOT NULL
);
