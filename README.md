# Project Name

Weekend SQL To-Do List

## Description

Duration: Weekend Challenge

This application allows a user to create and add tasks to a to do list.Upon task completion, the user can click a button which visually indicates that the task has been completed and instructs the user to go party. The user can also delete the task from the list at any point in time.

The problem solved by this project is the creation of a to do list and the tracking of task completetion (along with a little reminder that once your work is done you should go party). The problem of task tracking is solved by allowing the user to enter task data and interact with it by clicking complete and/or delete buttons to indicate the state of the task. 

## Prerequisites

    - [JQuery] (https://jquery.com/download/)
    - [Node.js](https://nodejs.org/en/)
    - [Express]
    - [SQL]

## Installation

1. Create a database named `weekend-to-do-list`.
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an npm start in your terminal.
4. Open localhost:5000 in a browser of your choice.

## Usage

To use this application:

1. The user inputs a name, task, and date then clicks 'Add Task To List' button.
2. Once the task is complete the user can click the 'Click To Complete Me! button which will change the color of the task row, remove the button, and display 'Task Complete! Let's Party!'.
3. At anytime, the user can also click a 'Delete Task' button to remove the task from the list and DB.

## Built With

List technologies and frameworks here

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 

## Support

If you have suggestions or issues, please email me at shyla.earl@gmail.com

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)
