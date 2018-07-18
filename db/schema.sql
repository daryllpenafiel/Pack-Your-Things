drop database if exists pack_db;

create database pack_db;

use pack_db;

create table packinglist (
    id int primary key auto_increment,
    thing_name varchar(100),
    packed boolean default false
);