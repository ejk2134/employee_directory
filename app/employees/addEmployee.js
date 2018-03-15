// Submit new employee to directory
const addEmployee = ()=>{
    /* 
        Get values from New Employee Form
        and create json object to be sent 
        to server
    */
    var newEmployee = JSON.stringify({
        last_name: trim($('#last-name').val()),
        first_name: trim($('#first-name').val()),
        title: trim($('#title').val()),
        salary: parseInt($('#salary').val()),
        address: trim($('#address').val()),
        city: trim($('#city').val()),
        state: trim($('#state').val()),
        zip: trim($('#zip').val()),
        phone: Trim($('#phone').val())
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