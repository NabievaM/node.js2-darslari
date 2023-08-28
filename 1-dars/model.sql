create database n9;

create table todos(
    id serial not null,
    title varchar(32) not null,
    description text not null,
    is_complited boolean default false,
    created_at timestamptz not null default current_timestamp
);

-- Table in dbdiagram
-- // Table workers {
-- //   id int 
-- //   f_name varchar(32)
-- //   l_name varchar(32)
-- //   phone_number text
-- // }

-- // Table user_times {
-- //   id int
-- //   user_id int
-- //   status varchar(32) [note: "Bu yerda foydalanuvchi kirgan yoki chiqgan payti boladi"]
-- //   created_at timestamp
-- // }
-- // Ref: workers.id - user_times.user_id

-- // Table shortener {
-- //   id int 
-- //   original_url text
-- //   redirect_url text
-- // }

-- Table blogs{
--   id int
--   title text
--   views int
-- }

-- Table users{
--   id int
--   username text
-- }

-- Table views {
--   id int
--   blog_id int
--   user_id int
-- } 

-- Ref: users.id - views.user_id
-- Ref: blogs.id - views.blog_id


#HomeWork
Table avtomobiles {
  vin int unique
  title varchar(32)
  price text
  description text
  is_completed boolean 
  is_sold boolean  [note: "Avtomobil sotilgan yoki sotilmaganligini aniqlash"]
  customer_bron int
}

Table customer_bron{
  id int
  name varchar(32)
  lastName varchar(32)
  avto_id int
  created_at timestamptz
}

Ref: avtomobiles.vin - customer_bron.avto_id
