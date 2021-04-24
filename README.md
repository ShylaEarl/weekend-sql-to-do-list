# Project Name

Weekend SQL To-Do List

## Description

Duration: Weekend Challenge

This project allows a user to input tasks into an application and have those tasks listed on the DOM. Once the task is completed the user has the option to click a complete task button to indicate that the task has been completed. The user also has an option to delete the task from the list at any point in time.

The problem solved by this project is the creation of a to do list. This project solves this problem by allowing the user to enter task data which will be displayed on the DOM. The user can interact with listed tasks by clicking a task completed button or delete button. 

## Prerequisites

    JQuery
    Node
    Express
    SQL

## Installation

1. Create a database named weekend-to-do-list,
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an npm install
4. Run npm start in your terminal
5. Open localhost:5000 in browser of choice including view developer tools javascript console to interact with the application

## Usage

To use this application:

1. User inputs a name, task, and date then clicks 'add task' button
2. Once the task is complete User clicks button 'click when completed' which will change the color of the task row, remove the button, and display 'Task Completed!'
3. User then has the option to click 'delete' button to remove the task from the list and DB.

## Built With

List technologies and frameworks here

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 

## Support

If you have suggestions or issues, please email me at shyla.earl@gmail.com

//////***********REMOVE BELOW*******///////////

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

