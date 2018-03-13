<?php
//Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//Include
include_once '../config/database.php';
include_once './Employee.php';

//Instantiate Database object
$database = new Database();
$database_connection = $database->getConnection();

//Instantiate Employee object
$employee = new Employee($database_connection);

//Query employees
$statement = $employee->getAll();
$count = $statement->rowCount();

//If there are records in the database
if($count>0){
    //Store employees in an array
    $employees_array = Array();
    $employees_array["records"]=Array();
    
    //Retrieve contents of employees table
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        //Store employee record in an array
        $employee_record = [
            "id" => $id,
            "last_name" => $last_name,
            "first_name" => $first_name,
            "title" => $title,
            "address" => $address,
            "city" => $city,
            "state" => $state,
            "zip" => $zip,
            "phone" => $phone,
            "salary" => $salary
        ];

        array_push($employees_array["records"], $employee_record);
    }

    echo json_encode($employees_array);
}else{
    echo (json_encode(
        ["message" => "No employees found"]
    ));
}
?>