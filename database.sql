DROP TABLE IF EXISTS workplace.employees;

CREATE TABLE workplace.employees (
    id int NOT NULL AUTO_INCREMENT,
    last_name varchar (50),
    first_name varchar (50),
    title varchar (20),
    address varchar (50),
    city varchar (50),
    state varchar (2),
    zip varchar (10),
    phone varchar (10),
    salary int,
    PRIMARY KEY (id)
);

INSERT INTO workplace.employees
VALUES (null, "Johnson", "Mark", "Director of Sales", "142 Butterbowl Terrace", "New Prague", "MN", "24123", "9198284623", 120000);

INSERT INTO workplace.employees
VALUES (null, "Vonn", "Rebecca", "Director of Comm", "1999 Confetti Road", "Albert Lee", "MN", "23984", "5554169854", 130000);
