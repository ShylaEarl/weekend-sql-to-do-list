console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    //get tasks from database and append to DOM on page load
    getTasks();
    //clicking submit button adds a new task to DOM and DB
    $('#submit-button').on('click', addTask);
    //on click of a specific delete button, remove that task from DOM and DB
    $('#task-display').on('click', '.remove-task', deleteTaskHandler);
    //on click of a specific completed button, update task to completed on DOM and DB
    $('#task-display').on('click', '.task-complete', completeTaskHandler);
}//end onReady

function getTasks(){
    //empties task table rows to prevent repeating on DOM
    $("#task-display").empty();
    // ajax call to server to get tasks
    $.ajax({
      type: 'GET',
      url: '/tasks'
    })
    .then(function(response){
      console.log(response);
      // For each task, append a new row to the table
      for(let i = 0; i < response.length; i += 1) {
        let task = response[i];
        //boolean conditional to create visual change on DOM upon task completion
        if(task.completed === false){
            $('#task-display').append(`
                <tr class="task-not-complete-row">
                    <td>${task.name}</td>
                    <td>${task.task}</td>
                    <td>${task.date.slice(0,10)}</td>
                    <td><button class="task-complete" data-id="${task.id}">Click To Complete Me!</button></td>
                    <td><button class="remove-task" data-id="${task.id}">Delete Task</button></td>
                </tr>
            `);
        }else{
            $('#task-display').append(`
                <tr class="task-complete-row">
                    <td>${task.name}</td>
                    <td>${task.task}</td>
                    <td>${task.date.slice(0,10)}</td>
                    <td class="celebrate">Task Complete! Let's Party!</td>
                    <td><button class="remove-task" data-id="${task.id}">Delete Task</button></td>
                </tr>
            `);
        }//end conditional
      }//end for loop
    })
    .catch(function(error){
      console.log('error in GET', error);
    });
} // end getTasks

function addTask(taskToAdd){
    //new object to hold user input values from DOM to send to server/DB
    let task = {};
    task.name = $('#nameIn').val();
    task.task = $('#taskIn').val();
    task.date = $('#dateIn').val();
    //input validation, checking that all fields are filled
    if($('#nameIn').val() === '' || $('#taskIn').val() === '' || $('#dateIn').val() === ''){
      alert('Please fill in all fields.');
    }else{
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
    }//end conditional
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

//captures id of specific task and calls to delete it once the user 
//has been alerted of and re/confirms delete
function deleteTaskHandler() {
  swal({ 
    title: "Hello Friend!",
    text: "Are you sure you want to delete this task?",
    buttons: {
      cancel: true,
      confirm: "Delete" 
    }
  }).then(val => {
    if(val){
      swal({
        title: "Good Choice!",
        text: "You've deleted your task.",
      });
      deleteTask($(this).data("id"));
    }
  }); 
}//end deleteTaskHandler

