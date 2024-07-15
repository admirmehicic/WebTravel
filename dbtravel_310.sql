create database dbtravel_310;

use dbtravel_310;

create table putovanja(
id int auto_increment primary key,
title varchar(255),
location varchar(255),
price float
);


create table users(
id int auto_increment primary key,
email varchar(255),
username varchar(255),
password varchar(255)
);

drop database dbtravel_310;