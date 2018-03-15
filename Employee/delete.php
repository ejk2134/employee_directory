<?php
// Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
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

// Get employee ID
$received_data = json_decode(file_get_contents("php://input"));

// Set incoming employee ID to our Employee object
$employee->id = $received_data->id;

// Delete employee from database
$response = null;
if($employee->delete()){
    $response['message'] = 'Employee removed.';
}else{
    $response['message'] = 'Could not remove employee.';
}

// Send response to front end.
echo json_encode($response);
?>