// Get one employee record from server
function getOneEmployee(id){
    // Request to server
    $.ajax({
        type: 'GET',
        url: 'server/Employee/getOne.php?id=' + id,
        success: (data)=>{
            console.log(data);
        }
    })
}