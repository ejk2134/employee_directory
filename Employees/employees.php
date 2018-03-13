<?php
class Employees{

    //Database connection
    private $conn;
    private $table_name;

    //Employee attributes
    public $id;
    public $last_name;
    public $first_name;
    public $title;
    public $address;
    public $city;
    public $state;
    public $zip;
    public $phone;
    public $salary;

    //Constructor
    function __construct($connection){
        $this->conn= $connection;
    }

    //Get employees
    function getAll(){

        //Select all query
        $query = "SELECT * FROM workplace.employees";

        //Prepare query statement
        $statement = $this->conn->prepare($query);

        //Execute query
        $statement->execute();

        return $statement;
    }
}
?>