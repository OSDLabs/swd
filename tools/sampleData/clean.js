const mysql = require('mysql');
const _ = require('lodash');

const config = {
  host: 'localhost',
  user: 'swd',
  password: 'swd_base',
  db: 'new_db_swd'
}

// Define queries
queries = [
  'DELETE FROM student;',
  'DELETE FROM loginId',
  'DELETE FROM loginType'
];

// Connect to database
const conn = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db
});


conn.connect(function(err) {
  if (err) { throw err; }
  else {
    console.log('Cleaning data from ' + config.db);

    // Run the queries
    _.forEach(queries, (query) => {
      conn.query(query, (err) => {
        if (err) { throw err; }
        else { console.log('Done: ' + query); }
      });
    });

  }
});
