--                 relationship - Munosabat(bog'lig'lik);
-- 1.One to One  / Bir odamga bir ism;
-- 2.One to Many / Bir sotuvchi bir necha xaridorga narsa sotoshi  mumkin;
-- 3.Many to Many / kop shoirlar kop kitoblar;

CREATE TABLE users(
    id serial not null PRIMARY KEY,
    name varchar not null
);

CREATE TABLE passwords(
    id serial not null PRIMARY KEY,
    seria varchar not null, 
    user_id integer not null,
    country_id integer not null,
    FOREIGN KEY(user_id)
     REFERENCES users(id)
);

CREATE TABLE Name (
    id serial not null PRIMARY KEY,
    name text not null,
    year integer not null
);

CREATE TABLE Person(
    id serial not null PRIMARY KEY,
    name text not null,
    year integer not null,
    name_id integer not null,
    FOREIGN KEY(name_id)
     REFERENCES name(id)
);
  
CREATE TABLE Client(
    id serial not null PRIMARY KEY,
    product text not null
);

CREATE TABLE Salesman(
    id serial not null PRIMARY KEY,
    product text not null,
    product_id integer not null,
    FOREIGN KEY(product_id)
      REFERENCES Client(id)
);

CREATE TABLE Books(
    id serial not null PRIMARY KEY,
    name text not null,
    year integer not null,
    book_id integer not null
);

CREATE TABLE Authors(
    id serial not null PRIMARY KEY,
    name text not null,
    year integer not null,
    author_id integer not null
);

CREATE TABLE book_authors(
    id integer not null PRIMARY KEY,
    FOREIGN KEY(book_id)
     REFERENCES Books(id),
    FOREIGN KEY(author_id)
     REFERENCES Authors(id)
);