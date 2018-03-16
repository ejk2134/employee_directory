// Submit new employee to directory
function addEmployee(){
    /* 
        Get values from New Employee Form
        and create json object to be sent 
        to server
    */
    var newEmployee = JSON.stringify({
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
        type: 'POST',
        url: 'server/Employee/post.php',
        contentType: 'application/json',
        data: newEmployee,
        success: ()=>{
            // Get updated Employee Records after submittal
            getAllEmployees();

            // Clear Add Employee form
            $('#last-name').val('')
            $('#first-name').val('')
            $('#title').val('')
            $('#salary').val('')
            $('#address').val('')
            $('#city').val('')
            $('#state').val('')
            $('#zip').val('')
            $('#phone').val('')
        }
    })
}