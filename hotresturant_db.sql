DROP DATABASE IF EXISTS hotresturant_db;
CREATE DATABASE hotresturant_db;
USE hotresturant_db;
CREATE TABLE reservation (
item_id INT NOT NULL AUTO_INCREMENT,
res_name VARCHAR(30) NOT NULL,
res_phone VARCHAR (20) NOT NULL,
res_email VARCHAR (30) NULL,
user_id VARCHAR (30) NULL,
PRIMARY KEY (item_id)
); 
INSERT INTO reservation (res_name, res_phone, res_email, user_id)
VALUES ("Ahmed", "979587088", "afhaque89@gmail.com","afhaque89");
INSERT INTO reservation (res_name, res_phone, res_email, user_id)
VALUES ("Buddy E Toups", "7138254601", "mydesignbuddy@gmail.com","BUDDYT");
INSERT INTO reservation (res_name, res_phone, res_email, user_id)
VALUES ("Tierra", "7204381472", "trafarris@gmail.com","^__^");
INSERT INTO reservation (res_name, res_phone, res_email, user_id)
VALUES ("sparta", "3003003000", "kickemtothepit@gmail.comm","r3030");
INSERT INTO reservation (res_name, res_phone, res_email, user_id)
VALUES ("Drew", "11111111111111", "d@noemail.com","sfd23");

SELECT * FROM reservation;
