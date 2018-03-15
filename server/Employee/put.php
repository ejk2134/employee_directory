<?php
// Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
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

// Store data sent from client
$update_data = json_decode(file_get_contents("php://input"));

// Set employee id and values to be updated
$employee->id = $update_data->id;
$employee->last_name = $update_data->last_name;
$employee->first_name = $update_data->first_name;
$employee->title = $update_data->title;
$employee->address = $update_data->address;
$employee->city = $update_data->city;
$employee->state = $update_data->state;
$employee->zip = $update_data->zip;
$employee->phone = $update_data->phone;
$employee->salary = $update_data->salary;

// Update employee information
$response = new stdClass();
if($employee->update()){
    $response->message = 'Employee information updated.';
}else{
    $response->message = 'Unable to update employee information.';
}

// Send response to client
echo json_encode($response);
?>