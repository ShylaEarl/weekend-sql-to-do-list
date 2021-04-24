TODO
- [x] front end UI
    -[x] user creates a task
- [x] task should be stored in DB
- [x] render an updated task list to DOM each time a task is created
- [x] each task has a 'Complete' and 'Delete' option
- [x] Upon completetion, change visual representation of task on DOM
- [] Upon completetion, 'check off' completion of task
- [x] Store task completion in DB (update boolean feild)
- [x] Each task should have a delete option
    - [x] a deleted task should be removed from DOM and DB

Use CSS styling to update page aesthetic beyond the vanilla HTML look:
  - [x] background color of the page
  - [x] all table CSS
  - [x] font family and size
  - [x] text color & or background color of tasks *to show whether or not they have been completed*

- [x] Create a Database using naming convention `weekend-to-do-app`
- [x] create a `database.sql` file with all `CREATE TABLE` queries.

- [] Update README file, esp change how complete functionality works

## Stretch Goals
-[x] For each of your strech goals, you will be practicing git branching. 
-[] Each branch will be merged into master using `--no-ff`. This will allow us to see that you branched your feature when you turn in your code.

- `feature-compeleteToggle`
    - [] add the ability to toggle complete button between completed/not completed and create a visual change on DOM

- `feature-styling-bootstrap` 

    - [x]  Add Bootstrap to the front end and style it up!
      - [x]  Buttons -- make the creation buttons and completion buttons green and the delete red.
      - [] Inputs -- make your text inputs styled in the bootstrap way
      - [] Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- `feature-confirm-delete`

    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
        - Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- `feature-ordering-task-query` 

    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
- `feature-time-completed` 

    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.
