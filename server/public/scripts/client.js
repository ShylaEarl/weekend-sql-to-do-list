console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    //call to get tasks from database and append to DOM on page load
    getTasks();

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