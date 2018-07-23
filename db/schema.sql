DROP DATABASE IF EXISTS pack_db;;

CREATE DATABASE pack_db;
USE pack_db;

CREATE TABLE packinglist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    thing_name varchar(150) NOT NULL,
    packed BOOLEAN DEFAULT FALSE
);
