console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    //add task list on page load
    getTask();
    //add click listeners
    $('#addTask').on('click', postTask);
    $('#todoTableBody').on('click', '.deleteButton', deleteTask);
    $('#todoTableBody').on('click', '.completedButton', editTask);
}

//get task data from server
function getTask(){
    $("#todoTableBody").empty();
    $.ajax({
        method: 'GET',
        url: '/taskList'
    }).then(function (response) {
        console.log('in client get request', response);
        // append data to DOM
        for (let i = 0; i < response.length; i++) {
            let date = response[i].date.slice(0,10);
            $('#todoTableBody').append(`
                <tr>
                    <td>${response[i].name}</td>
                    <td>${response[i].task}</td>
                    <td>${date}</td>
                    <td><button data-id=${response[i].id} class='completedButton'>Completed</button></td> 
                    <td><button data-id=${response[i].id} class='deleteButton'>Delete</button></td>
                </tr>
            `);
        }    
    });
}

//adding new task to DB and DOM
function postTask(){
    let taskListObject = {
        name: $('#name').val(),
        task: $('#task').val(),
        date: $('#date').val(),
    }
    $.ajax({
        method: 'POST',
        url: '/taskList',
        data: taskListObject
    }).then( function (response) {
        $('#name').val(''),
        $('#task').val(''),
        $('#date').val(''),
        getTask(); //updating task list on DOM
    });
}

//deleting task from DOM and DB
function deleteTask(){
    console.log('in deleteTask');
    let taskId = $(this).data('id');
    $.ajax({
        method: 'DELETE',
        url: `/taskList/${taskId}` 
    }).then( function(response){
        console.log(response);
        getTask();
    }).catch(function(error){
        console.log('error', error);
    });
}

function editTask(){
    let taskCompleted = $(this).data('id'); //was direction should it be id? or completedButton?
    let taskId =$(this).data('id');
    console.log('clicked', taskCompleted, taskId);

    changeColor();

    $.ajax({
        method: 'PUT',
        url: `/taskList/completed/${taskId}`,
        data: {direction: taskCompleted}  //here? {completed: taskCompleted}
    }).then(function(response){
        console.log('response', response);
        //get request
        getTask();
    }). catch(function(error){
        console.log('error in put', error);
    });
}

function changeColor(){

}

