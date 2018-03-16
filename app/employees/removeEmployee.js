// Delete employee from directory
function removeEmployee(){
    // Get employee ID of selected employee
    let employeeId = $(this).parent().parent().data('id');

    // Prepare object for server request
    let idObject = JSON.stringify({
        id: employeeId
    });

    // Request to server
    $.ajax({
        type: 'DELETE',
        url: 'server/Employee/delete.php',
        contentType: 'application/json',
        data: idObject,
        success: ()=>{
            // Get updated Employee Records after successful removal
            getAllEmployees();
            
            // Cancel edit to prevent user from editing a record that has been removed
            cancelEdit();
        }
    })
}