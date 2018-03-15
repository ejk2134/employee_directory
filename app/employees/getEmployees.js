const getEmployees = ()=>{
    // Get all employee records from server
    $.ajax({
        type: 'GET',
        url: 'server/Employee/get.php',
        success: (data)=>{
            // Employee records
            let employeeRecords = data.records;

            // Build Employee directory table
            for (let i = 0; i < employeeRecords.length; i++){
                // Create a new table row and set its ID to corresponding employee ID
                let $newRow = $('<tr>').data('id', employeeRecords[i].id);

                // Add employee information to row
                $newRow.append('<td>' + employeeRecords[i].last_name + '<td>');
                $newRow.append('<td>' + employeeRecords[i].first_name + '<td>');
                $newRow.append('<td>' + employeeRecords[i].title + '<td>');
                $newRow.append('<td>' + employeeRecords[i].salary + '<td>');
                $newRow.append('<td>' + employeeRecords[i].address + '<td>');
                $newRow.append('<td>' + employeeRecords[i].city + '<td>');
                $newRow.append('<td>' + employeeRecords[i].state + '<td>');
                $newRow.append('<td>' + employeeRecords[i].zip + '<td>');
                $newRow.append('<td>' + employeeRecords[i].phone + '<td>');

                // Append new row to employee directory table
                $('#directory-table-body').append($newRow);
            }
        }
    })
}