<?php
class Employee{

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

    //Delete employee
    function delete(){
        
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

    //POST employee
    function post(){
        //Insert query
        $query = "INSERT INTO workplace.employees SET 
            last_name=:last_name, 
            first_name=:first_name, 
            title=:title, 
            address=:address, 
            city=:city, 
            state=:state, 
            zip=:zip, 
            phone=:phone, 
            salary=:salary;";

        //Prepare query
        $statement = $this->conn->prepare($query);

        //Sanitize submitted values
        $this->last_name=htmlspecialchars(strip_tags($this->last_name));
        $this->first_name=htmlspecialchars(strip_tags($this->first_name));
        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->address=htmlspecialchars(strip_tags($this->address));
        $this->city=htmlspecialchars(strip_tags($this->city));
        $this->state=htmlspecialchars(strip_tags($this->state));
        $this->zip=htmlspecialchars(strip_tags($this->zip));
        $this->phone=htmlspecialchars(strip_tags($this->phone));
        $this->salary=htmlspecialchars(strip_tags($this->salary));

        //Bind values to $statement
        $statement->bindParam(":last_name", $this->last_name);
        $statement->bindParam(":first_name", $this->first_name);
        $statement->bindParam(":title", $this->title);
        $statement->bindParam(":address", $this->address);
        $statement->bindParam(":city", $this->city);
        $statement->bindParam(":state", $this->state);
        $statement->bindParam(":zip", $this->zip);
        $statement->bindParam(":phone", $this->phone);
        $statement->bindParam(":salary", $this->salary);

        //Execute query
        if($statement->execute()){
            return true;
        }

        return false;
    }
}
?>