create database transaction;

create table register(
  id serial primary key not null,
  name varchar(64) not null,
  email text not null,
  password varchar(32) not null,
  balance int not null default 1000000,
  created_at timestamp without time zone default now()
);

create table service(
  id serial primary key not null,
  register_id int not null,
  service varchar(255) not null,
  price float not null,
  from_customer int,
  foreign key (register_id) references register(id)
);

create table transactions(
  id serial primary key not null,
  from_customer int,
  to_solder int,
  quantity float not null,
  created_at timestamp without time zone default current_timestamp,
  foreign key (from_customer) references register(id) on delete cascade,
  foreign key (to_solder) references register(id) on delete cascade
);