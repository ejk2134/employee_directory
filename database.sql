--Employees table in database
CREATE TABLE employees (
    id serial primary key,
    last_name varchar (50),
    first_name varchar (50),
    title varchar (20),
    address varchar (50),
    city varchar (50),
    state varchar (20),
    zip varchar (10),
    phone varchar (10),
    salary int
)