// Edit employee info
function editEmployee(){
    // Get employee data from forms
    var employeeData = JSON.stringify({
        id: $('#edit-employee').data('employee-id'),
        last_name: $('#last-name').val().trim(),
        first_name: $('#first-name').val().trim(),
        title: $('#title').val().trim(),
        salary: parseInt($('#salary').val()),
        address: $('#address').val().trim(),
        city: $('#city').val().trim(),
        state: $('#state').val().trim(),
        zip: $('#zip').val().trim(),
        phone: $('#phone').val().trim()
    });

    // Request to server
    $.ajax({
        type: 'PUT',
        url: 'server/Employee/put.php',
        contentType: 'application/json',
        data: employeeData,
        success: ()=>{
            // Get updated Employee Records after submittal
            getAllEmployees();

            // Return form to add employee mode
            cancelEdit();
            }
        })
    }
