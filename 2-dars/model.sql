CREATE TABLE Product(
    id serial not null,
    water varchar(64) not null,
    buy text not null,
    sell text not null,
    company_name text not null,
    created_at timestamp without time zone default current_timestamp
);

insert into Product(
    water,
    buy,
    sell,
    company_name                        
)values
('Pepsi','5.000','6.000','PEPSI'),
('Fanta','6.000','7.000','Coca-Cola'),
('Sprite','5.500','7.000','Coca-cola'),
('Mountain dew','4.300','6.000','PEPSI'),
('dinay','7.000','8.000','DINAY');
