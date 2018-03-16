<?php
// Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Include
include_once '../config/Database.php';
include_once './Employee.php';

// Instantiate Database object
$database = new Database();
$database_connection = $database->getConnection();

// Instantiate Employee object
$employee = new Employee($database_connection);

// Get employee ID
$employee->id = isset($_GET['id']) ? $_GET['id'] : die();

// Query database for employee
$employee->getOne();

// Store employee in array
$employee_array = array(
    "id" => $employee->id,
    "last_name" => $employee->last_name,
    "first_name" => $employee->first_name,
    "title" => $employee->title,
    "address" => $employee->address,
    "city" => $employee->city,
    "state" => $employee->state,
    "zip" => $employee->zip,
    "phone" => $employee->phone,
    "salary" => $employee->salary,
);

// Send record back to client in json format
echo json_encode($employee_array);
?>