console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    //get tasks from database and append to DOM on page load
    getTasks();
    //clicking submit button adds a new task to DOM and DB
    $('#submit-button').on('click', addTask);
    //on click of a specific delete button, remove that task
    $('#task-display').on('click', '.remove-task', deleteTaskHandler);
    //on click of a specific completed button, update task to completed
    $('#task-display').on('click', '.task-complete', completeTaskHandler);
}//end onReady

function getTasks(){
    //console.log( 'in getTasks' );
    $("#task-display").empty();
    // ajax call to server to get tasks
    $.ajax({
      type: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log(response);
      for(let i = 0; i < response.length; i += 1) {
        let task = response[i];
        // For each task, append a new row to the table
        $('#task-display').append(`
          <tr>
            <td>${task.name}</td>
            <td>${task.task}</td>
            <td>${task.date}</td>
            <td><button class="task-complete" data-id="${task.id}">Completed!</button></td>
            <td><button class="remove-task" data-id="${task.id}">Delete Task</button></td>
          </tr>
        `);
      }//end for loop
      //renderTasks(response);
    }).catch(function(error){
      console.log('error in GET', error);
    });
} // end getTasks

function addTask(taskToAdd){
    console.log('Submit button clicked.');
    //new object to hold user input values from DOM to send to server/DB
    let task = {};
    task.name = $('#nameIn').val();
    task.task = $('#taskIn').val();
    task.date = $('#dateIn').val();
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: task,
    }).then(function(response) {
      console.log('Response from server.', response);
      //updates task list with new task
      getTasks();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add a task at this time. Please try again later.');
    });
    //empties inputs on DOM
    $('#nameIn').val('');
    $('#taskIn').val('');
    $('#dateIn').val('');
}//end addTasks

//updates a task to show it's been completed
function completeTask(taskId){
    $.ajax({
      method: 'PUT',
      url: `/tasks/${taskId}`,
      data: taskId
    })
    .then(response => {
      console.log(response);
      //updates task list on the DOM after deleting a task
      getTasks();
    })
      .catch(error => {
      console.log('Error updating tasks', error);
    });
}//end completeTask

//captures id of specific task to be updated, calls completeTask with that id
function completeTaskHandler(){
    completeTask($(this).data("id"));
}//end completeTaskHandler

//Deletes a task from DOM and DB 
function deleteTask(taskId) {
    $.ajax({
      method: 'DELETE',
      url: `/tasks/${taskId}`
    })
      .then(function (response) {
      //updates task list on the DOM after deleting a task
      getTasks();
    })
      .catch(function (error) {
      alert('Error trying to delete task.', error);
    });
}//end deleteTask

//captures id of specific task to be deleted and calls deleteTask with that id
function deleteTaskHandler() {
    deleteTask($(this).data("id"));
}//end deleteTaskHandler