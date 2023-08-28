create  extension "uuid-ossp";

create type user_role as enum('administrator', 'director', 'designer', 'developer');

create table users(
    id uuid not null primary key default uuid_generate_v4(),
    name varchar(32) not null,
    role user_role default 'administrator'
);

create table users_count(
    id uuid not null primary key default uuid_generate_v4(),
    name user_role not null,
    count int not null default 0 
);

create table demos(
    id uuid not null primary key default uuid_generate_v4(),
    name varchar(64) not null
);

--query
insert into users(name,role) values
('John', 'administrator'),
('Alex', 'director'),
('Muslima', 'designer'),
('Mukhlis', 'developer');

insert into users_count(name) values
('director'),
('administrator'),
('designer'),
('developer');

create function users_event()
returns TRIGGER
language plpgsql as
$$
 BEGIN
 insert into demos(name)values('users');

 return NEW;
 END;
 $$;

 create trigger my_trig
 AFTER insert 
 on users
 for each statement
 execute procedure users_event();

 create trigger row_trig
 AFTER insert
 on users 
 for each row
 execute procedure users_event();