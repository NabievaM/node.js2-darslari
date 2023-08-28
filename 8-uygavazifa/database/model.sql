create table workers(
    id serial not null primary key,
    fullname varchar(32) not null,
    email varchar(32) not null,
    password varchar(32) not null,
    role boolean default true,
    is_active boolean 
);

insert into workers(fullname, email, password) values
('Anvarova Asila', 'anvarova@gmail.com', '010203'),
('Baxromova Xushruya', 'xushruyy@gmail.com', '010203'),
('Sanginova Farangiz','sanginova@gmail.com', '010203'),
('Osmanova Moxizoda', 'o.moxi@gmail.com', '010203'),
('Ilxomova Ozoda', 'ozowka@gmail.com', '010203');

create table category(
    id serial not null primary key,
    name varchar(32) not null,
    is_active boolean
);

create table product(
    id serial not null primary key,
    name varchar(32),
    kg float not null,
    price float not null,
    category_id int,
    is_active boolean,
    foreign key (category_id) references category(id)
);

create table history(
    id serial not null primary key,
    workers_id integer,
    product_id integer,
    is_sell boolean,
    kg float not null,
    price float not null,
    created_at timestamp without time zone default now(),
    foreign key (workers_id) references workers(id),
    foreign key (product_id) references product(id)
);

create table login(
    id serial not null primary key,
    username varchar(32) not null,
    password varchar(32) not null
);