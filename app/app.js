// On page load
const onReady = ()=>{
    // Request employees from server and display them to user
    getEmployees();

    // Listeners
    $('#add-employee').on('click', addEmployee);
}

// Run scripts
$(document).ready(onReady);