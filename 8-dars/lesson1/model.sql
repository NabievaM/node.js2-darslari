--union
create table workers(
    id serial primary key not null,
    name varchar(255) not null,
    first_name varchar(255) not null,
    created_at timestamp not null default current_timestamp
);

create table users(
    id serial primary key not null,
    name varchar(255) not null,
    first_name varchar(255) not null,
    lavozim varchar(32) not null,
    created_at timestamp not null default current_timestamp
);

insert into workers(name , first_name)
values
('Nabieva', 'Mukhlis'),
('Toshmatova', 'Muslima'),
('Alieva', 'Munisa'),
('Maxmudova', 'GulAsal'),
('Umarova', 'Xadicha');

insert into users(name , first_name , lavozim)
values
('Xojanazarova', 'Samira', 'Bloger'),
('Nabieva', 'Mukhlis', 'Programmer'),
('Toshmatova', 'Muslima','Teacher'),
('Alieva', 'Munisa', 'Pilot'),
('Maxmudova', 'GulAsal', 'Police'),
('Umarova', 'Xadicha', 'BiznesLady');

select name, first_name from users union select name, first_name from workers;
select name, first_name from users union all select name, first_name from workers;


--json
create table users(
    id serial primary key not null,
    name varchar(255) not null,
    job json not null 
);

insert into users(name, job)
values
('Mukhlis','{"occupation":"programmer","tool":"computer","free":"true"}'),
('Ali','{"occupation":"pilot","tool":"airplane"}'),
('Abu','{"occupation":"model","tool":"clothes"}'),
('Sofa','{"occupation":"doctor","tool":"tools"}'),
('Alisa','{"occupation":"programmer","tool":"computer","time":{"from":"9","to":"18"}}');

--views
create table users(
    id serial primary key not null,
    name varchar(255) not null,
    job json not null 
);

insert into users(name, job)
values
('Mukhlis','{"occupation":"programmer","tool":"computer","free":"true"}'),
('MuhammadAli','{"occupation":"pilot","tool":"airplane"}'),
('Abduroxman','{"occupation":"model","tool":"clothes"}'),
('Sofiya','{"occupation":"doctor","tool":"tools"}'),
('Alisa','{"occupation":"programmer","tool":"computer","time":{"from":"9","to":"18"}}');

select * from users where Length(name) > 6 and name ILIKE '%a%';

create view selected_users as select * from users where Length(name) > 6 and name ILIKE '%a%';