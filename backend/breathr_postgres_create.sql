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
  "title" VARCHAR NOT NULL,
  "category" VARCHAR NOT NULL,
	"text" VARCHAR NOT NULL,
  "user_id" INT REFERENCES users(user_id) NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "date" DATE DEFAULT CURRENT_DATE NOT NULL
);

CREATE TABLE authors (
  "author_id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR NOT NULL,
  "last_name" VARCHAR NULL
);

CREATE TABLE poems (
	"poem_id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
	"text" VARCHAR NOT NULL,
  "author_id" INT REFERENCES authors(author_id) NOT NULL
);

CREATE TABLE users_poems (
  "user_id" INT REFERENCES users(user_id) NOT NULL,
  "poem_id" INT REFERENCES poems(poem_id) NOT NULL
);

-- coloring book table(s) TBD