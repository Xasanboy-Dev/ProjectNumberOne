CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    lastname TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    country TEXT,
    gender TEXT,
    age TEXT,
    account TEXT
);

CREATE TABLE messages (
    myid BIGSERIAL NOT NULL,
    myname TEXT,
    yourname TEXT,
    texts TEXT,
    clock TEXT NOT NULL,
    minut TEXT NOT NULL
);

INSERT INTO
    messages (myid, myname, yourname, texts, clock,minut)
VALUES
    (
        2,
        'Alex',
        'Xasanboy',
        'Hello Alex',
        '2007-12-19',
        '19:23'
    );