// On page load
const onReady = ()=>{
    // Request employees from server and display them to user
    getEmployees();
}

// Run scripts
$(document).ready(onReady);