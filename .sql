CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    lastname TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    country TEXT,
    gender TEXT,
    age TEXT
);