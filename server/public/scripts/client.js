console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    //call to get tasks from database and append to DOM on page load
    getTasks();
    $('#submit-button').on('click', addTask);

}//end onReady

function getTasks(){
    console.log( 'in getTasks' );
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
          getTasks();
        }).catch(function(error) {
          console.log('Error in POST', error)
          alert('Unable to add a task at this time. Please try again later.');
    });
    $('#nameIn').val('');
    $('#taskIn').val('');
    $('#dateIn').val('');
  }//end addTasks