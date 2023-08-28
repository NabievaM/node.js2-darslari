--categories
--products

create table categories(
    id serial not null primary key,
    name varchar(32) not null
);

create table products(
    id serial not null primary key,         
    name json not null,
    price float not null,
    category_id int not null,
    foreign key (category_id) references categories(id)
);