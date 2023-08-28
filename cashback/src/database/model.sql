create database cashback;

CREATE TABLE company(
    id serial primary key not null,
    name varchar(32) not null
);

CREATE TABLE users(
    id serial primary key not null,
    fullname varchar(32) not null
);

CREATE TABLE products(
    id serial primary key not null,
    name varchar(32) not null,
    price varchar(32) not null,
    company_id integer not null,
    foreign key (company_id) references company(id)
);

CREATE TABLE promocode(
    id serial primary key not null,
    cashback varchar(32) not null,
    exploitation int not null default 24,
    company_id int not null,
    user_id int not null,
    product_id int not null,
    foreign key (company_id) references company(id),
    foreign key (user_id) references users(id),
    foreign key (product_id) references products(id)
);