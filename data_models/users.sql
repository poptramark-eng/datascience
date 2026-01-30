create table if not exist users(
    id bigserial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(50) not null,
    datecreated date default current_date
);