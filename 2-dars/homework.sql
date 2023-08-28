Create Table users (
    id serial not null,
    fullName varchar(32) not null,
    email varchar(32) not null,
    age int not null,
    country varchar(64) not null,
    isActive boolean default true,
    created_at timestamp without time zone default current_timestamp
);
insert into users(
    fullName,
    email,
    age,
    country
)values
    ('Nabieva Muxlisaxon','mukhlis@gmail.com',10,'Turkey'),
    ('Toshmatova Muslimaxon','muslim@gmail.com',10,'Turkey'),
    ('Azizova Ruxshona','azizova@gmail.com',10,'Turkey'),
    ('Umarova Aziza','umarova@gmail.com',10,'Turkey');