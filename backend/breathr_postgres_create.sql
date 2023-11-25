CREATE TABLE users (
	"user_id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR NOT NULL,
  "last_name" VARCHAR NOT NULL,
  "username" VARCHAR UNIQUE NOT NULL,
  "password" VARCHAR NOT NULL,
  "email" VARCHAR NOT NULL
);

CREATE TABLE journal_entries (
	"entry_id" SERIAL PRIMARY KEY,
	"entry_text" VARCHAR NOT NULL,
  "author_id" INT REFERENCES users(user_id) NOT NULL,
  "timestamp" TIMESTAMP NOT NULL,
);

CREATE TABLE poems (
	"poem_id" SERIAL PRIMARY KEY,
  "poem_title" VARCHAR NOT NULL,
	"poem_text" VARCHAR NOT NULL,
  "author_first_name" VARCHAR NOT NULL,
  "author_last_name" VARCHAR NULL,
);

CREATE TABLE users_poems (
  "user_id" INT REFERENCES users(user_id) NOT NULL,
  "poem_id" INT REFERENCES poems(poem_id) NOT NULL
);

-- coloring book table(s) TBD