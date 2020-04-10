Drop DATABASE if exists burgers_db;

Create DATABASE burgers_db;
use burgers_db

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INIT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name varchar(256),
    devoured BOOLEAN false,
);
