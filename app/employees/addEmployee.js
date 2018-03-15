// Submit new employee to directory
const addEmployee = ()=>{
    /* 
        Get values from New Employee Form
        and create json object to be sent 
        to server
    */
    var newEmployee = JSON.stringify({
        last_name: $('#last-name').val(),
        first_name: $('#first-name').val(),
        title: $('#title').val(),
        salary: parseInt($('#salary').val()),
        address: $('#address').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zip: $('#zip').val(),
        phone: $('#phone').val()
    });

    // Request to server
    $.ajax({
        type: 'POST',
        url: 'server/Employee/post.php',
        contentType: 'application/json',
        data: newEmployee,
        success: (response)=>{
            // Get updated Employee Records after submittal
            getEmployees();

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