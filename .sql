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
    CREATE TABLE messages (
        myid BIGSERIAL NOT NULL,
        myname TEXT,
        yourname TEXT,
        texts TEXT
    );
    INSERT INTO messages (myid,myname,yourname,texts) VALUES (2,'Xasanboy','Alex','Hello Alex');