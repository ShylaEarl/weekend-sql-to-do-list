console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    //on page load add task list
    getTask();
    // //add click listeners
    $('#addTask').on('click', postTask);
    //$(#todoTableBody).on('click', '.deleteButton', deleteTask);
    // $(#todoTableBody).on('click', '.editTask', editTask);
}

//get task data from server
function getTask(){
    //$("#todoTableBody").empty();
    $.ajax({
        method: 'GET',
        url: '/taskList'
    }).then(function (response) {
        console.log('in client get request', response);
        // append data to DOM
        for (let i = 0; i < response.length; i++) {
            $('#todoTableBody').append(`
                <tr>
                    <td>${response[i].name}</td>
                    <td>${response[i].task}</td>
                    <td>${response[i].date}</td>
                    <td>${response[i].completed}</td>
                    <td><button data-id=${response[i].id} class=deleteButton>Delete</button></td>
                </tr>
            `);
        }    
    });
}

//<td><button data-id=${response[i].id} data-direction='up' class='completed'>Completed</button>
//<button data-id=${response[i].id} data-direction='down' class='rankDown'>DOWN</button></td>

function postTask(){
    let taskListObject = {
        name: $('#name').val(),
        task: $('#task').val(),
        date: $('#date').val(),
        completed: $('#completed').val()
    }
    $.ajax({
        method: 'POST',
        url: '/taskList',
        data: taskListObject
    }).then( function (response) {
        $('#artist').val(''),
        $('#track').val(''),
        $('#rank').val(''),
        $('#published').val('')
        getTask();
    });
}

//function deleteTask(){

//}

//function editTask(){

//}