CREATE TABLE Discuss(
    id serial not null PRIMARY KEY,
    title text not null,
    description text not null,
    name varchar not null,
    subject text not null,
    phone_Number varchar(32)
);

CREATE TABLE Feedback(
    id serial not null PRIMARY KEY,
    name text not null,
    photo text not null,
    profession char(32) not null,
    decription text not null
);

 CREATE TABLE Signup_alerts(
    id serial not null PRIMARY KEY,
    email text not null,
    contact text not null,
    faq text not null,
    privacy_policy text not null,
    terms_of_use text not null,
    global_office text not null,
    local_office text not null
 );