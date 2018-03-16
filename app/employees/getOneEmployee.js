// Get one employee record from server
function getOneEmployee(id){
    // Request to server
    $.ajax({
        type: 'GET',
        url: 'server/Employee/getOne.php?id=' + id,
        success: (employeeData)=>{
            // Fill current employee data in Edit Form
            $('#last-name').val(employeeData.last_name)
            $('#first-name').val(employeeData.first_name)
            $('#title').val(employeeData.title)
            $('#salary').val(employeeData.salary)
            $('#address').val(employeeData.address)
            $('#city').val(employeeData.city)
            $('#state').val(employeeData.state)
            $('#zip').val(employeeData.zip)
            $('#phone').val(employeeData.phone)

            // Attach employee ID to Submit Changes button
            $('#edit-employee').data('employee-id', employeeData.id);        
        }
    })
}