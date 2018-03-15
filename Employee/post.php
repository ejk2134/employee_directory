<?php
// Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include
include_once '../config/Database.php';
include_once './Employee.php';

// Instantiate Database object
$database = new Database();
$database_connection = $database->getConnection();

// Instantiate Employee object
$employee = new Employee($database_connection);

// Get posted data
$posted_data = json_decode(file_get_contents("php://input"));

// Set values of new record
$employee->last_name = $posted_data->last_name;
$employee->first_name = $posted_data->first_name;
$employee->title = $posted_data->title;
$employee->address = $posted_data->address;
$employee->city = $posted_data->city;
$employee->state = $posted_data->state;
$employee->zip = $posted_data->zip;
$employee->phone = $posted_data->phone;
$employee->salary = $posted_data->salary;

// Construct new Employee
$response = new stdClass();
if($employee->post()){
    $response->message = 'Employee added.';
// If unable to construct new Employee
}else{
    $response->message = 'Unable to add employee.';
}

// Send response to client
echo json_encode($response);
?>