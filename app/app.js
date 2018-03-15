// On page load
const onReady = ()=>{
    // Request employees from server and display them to user
    getEmployees();

    // Listeners
    $('#add-employee').on('click', addEmployee);
    $('#directory-table-body').on('click', '.remove', removeEmployee)
}

// Run scripts
$(document).ready(onReady);