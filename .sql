CREATE TABLE    headteacher(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80),
    lastname VARCHAR(80),
    email VARCHAR(80),
    password VARCHAR(80),
    country VARCHAR(80),
    degree VARCHAR(80),
    img VARCHAR(10000)
);
INSERT INTO headteacher (name,lastname,email,password,country,degree,img) VALUES ('Nastiya','Axmedovna','Nastiya@gmail.com','5581333m','Uzbekistan','Master','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F671549%2Fpexels-photo-671549.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fview%2F&tbnid=9UV_Nt2K7h-45M&vet=12ahUKEwjxmL_BsrX8AhU_CBAIHRLUCdoQMygbegUIARDzAQ..i&docid=671nbd_54tOw-M&w=500&h=750&q=photo&ved=2ahUKEwjxmL_BsrX8AhU_CBAIHRLUCdoQMygbegUIARDzAQ');

CREATE TABLE teachers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80),
    lastname VARCHAR(80),
    email VARCHAR(80),
    password VARCHAR(80),
    country VARCHAR(80),
    degree VARCHAR(80),
        img VARCHAR(10000)

);
INSERT INTO teachers (name,lastname,email,password,country,degree,img) VALUES ('Nastiya1','Axmedova','Nastiya1@gmail.com','5581333mm','Russia','Contract','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F671549%2Fpexels-photo-671549.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fview%2F&tbnid=9UV_Nt2K7h-45M&vet=12ahUKEwjxmL_BsrX8AhU_CBAIHRLUCdoQMygbegUIARDzAQ..i&docid=671nbd_54tOw-M&w=500&h=750&q=photo&ved=2ahUKEwjxmL_BsrX8AhU_CBAIHRLUCdoQMygbegUIARDzAQ');

CREATE TABLE pupils(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(80),
    lastname VARCHAR(80),
    email VARCHAR(80),
    password VARCHAR(80),
    country VARCHAR(80),
    class VARCHAR(80),
    img VARCHAR(10000)
);
INSERT INTO pupils (name,lastname,email,password,country,class,img) VALUES ('Xasanboy','Abdurasulov','hasanbojabdurasulov309@gmail.com','+919928473','Uzbekistan','9','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F671549%2Fpexels-photo-671549.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fview%2F&tbnid=9UV_Nt2K7h-45M&vet=12ahUKEwjxmL_BsrX8AhU_CBAIHRLUCdoQMygbegUIARDzAQ..i&docid=671nbd_54tOw-M&w=500&h=750&q=photo&ved=2ahUKEwjxmL_BsrX8AhU_CBAIHRLUCdoQMygbegUIARDzAQ');
