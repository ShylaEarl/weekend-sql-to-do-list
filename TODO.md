TODO
- [] front end UI
    -[] user creates a task
- [] task should be stored in DB
- [] render an updated task list to DOM each time a task is created
- [] each task has a 'Complete' and 'Delete' option
- [] Upon completetion, change visual representation of task on DOM
- [] Upon completetion, 'check off' completion of task
- [] Store task completion in DB (update boolean feild)
- [] Each task should have a delete option
    - [] a deleted task should be removed from DOM and DB

Use CSS styling to update page aesthetic beyond the vanilla HTML look:
  - [] background color of the page
  - [] font family and size
  - [] text color & or background color of tasks *to show whether or not they have been completed*

- [x] Create a Database using naming convention `weekend-to-do-app`
- [x] create a `database.sql` file with all `CREATE TABLE` queries.


## Stretch Goals


/////CUT INSTRUCTION CODE////////
* Create a front end experience that allows a user to create a Task.
* When the Task is created, it should be stored inside of a database (SQL)
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* Each Task should have an option to 'Complete' or 'Delete'.
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
* Whether or not a Task is complete should also be stored in the database.
* Deleting a Task should remove it both from the front end as well as the Database.