const pg = require('pg');
const url = require('url');
let config = {};
// We need a different pg configuration if we're running
// on Heroku, vs if we're running locally.
//
// Heroku gives us a process.env.DATABASE_URL variable,
// so if that's set, we know we're on heroku.
if (process.env.DATABASE_URL) {
  config = {
    // We use the DATABASE_URL from Heroku to connect to our DB
    connectionString: process.env.DATABASE_URL,
    // Heroku also requires this special `ssl` config
    ssl: { rejectUnauthorized: false },
  };
} else {
  // If we're not on heroku, configure PG to use our local database
  config = {
    host: 'localhost',
    port: 5432,
    database: `weekend-to-do-app`, // CHANGE THIS LINE to match your local database name!
  };
}
// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);
// the pool will log when it connects to the database
pool.on('connect', () => {
  console.log('Postgesql connected');
});
// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});
module.exports = pool;

//CODE CHANGED FROM LOCAL TO HEROKU DEPLOYMENT//
// const pg = require('pg');

// const config = {
//   database: 'weekend-to-do-app', 
//   host: 'localhost', 
//   port: 5432, 
//   max: 10, 
//   idleTimeoutMillis: 30000 
// };

// const pool = new pg.Pool(config);

// pool.on("connect", () => {
//   console.log("connected to postgres");
// });

// pool.on("error", (err) => {
//   console.log("error connecting to postgres", err);
// });

// module.exports = pool;