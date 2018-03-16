// Get all employee records from server
function getAllEmployees(){
    // Request to server
    $.ajax({
        type: 'GET',
        url: 'server/Employee/getAll.php',
        success: (data)=>{
            // Employee records
            let employeeRecords = data.records;

            // Empty Employee directory table
            $('#directory-table-body').empty();

            // Build Employee directory table
            for (let i = 0; i < employeeRecords.length; i++){
                // Create a new table row and set its ID to corresponding employee ID
                let $newRow = $('<tr>').data('id', employeeRecords[i].id);

                // Add employee information to row
                $newRow.append('<td>' + employeeRecords[i].last_name + '</td>');
                $newRow.append('<td>' + employeeRecords[i].first_name + '</td>');
                $newRow.append('<td>' + employeeRecords[i].title + '</td>');
                $newRow.append('<td>' + employeeRecords[i].salary + '</td>');
                $newRow.append('<td>' + employeeRecords[i].address + '</td>');
                $newRow.append('<td>' + employeeRecords[i].city + '</td>');
                $newRow.append('<td>' + employeeRecords[i].state + '</td>');
                $newRow.append('<td>' + employeeRecords[i].zip + '</td>');
                $newRow.append('<td>' + employeeRecords[i].phone + '</td>');
                
                // Append edit button
                let $editButton = $('<button>', {class: 'edit', text: 'Edit employee'});
                $newRow.append(($('<td>').append($editButton)));

                // Append remove button
                let $deleteButton = $('<button>', {class: 'remove', text: 'Remove employee'});
                $newRow.append(($('<td>').append($deleteButton)));

                // Append new row to employee directory table
                $('#directory-table-body').append($newRow);
            }
        }
    })
}