DROP DATABASE if exists burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
	id int auto_increment not null,
	burger_name varchar(10) not null,
	devoured boolean,
	date varchar(10) not null,
	primary key (id)
)