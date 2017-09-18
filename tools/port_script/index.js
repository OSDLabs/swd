const mysql = require('mysql');
const config = require('./config.js');
const transform = require('./transform.js');

// Connect to the source database
const source = mysql .createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db.source
});
source.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected to source');
});

// Connect to the destination
const dest = mysql .createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db.destination
})
dest.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected to destination');
});


for (var item in transform) {
  console.log(transform[item].table.old);
  source.query('SELECT * FROM ' + transform[item].table.old + ';',
    function(err, res, fields) {
      if (err) { throw err; }
      console.log('\nCopying table ' + transform[item].table.old);
      for (var i in res) {
        let query = 'INSERT INTO ';
        query += transform[item].table.new;
        query += ' (';

        // Load fields in order
        let values = '';
        let count = 0;
        for (var old in transform[item].fields) {
          if (count != 0) {
            query += ', ';
            values += ', ';
          }
          query += transform[item].fields[old];

          // Add various data cleaning techniques here
          values += '"' + res[i][old] + '"';
          count++;
        }

        query += ') VALUES (' + values;
        query += ');';

        // Run the query
        dest.query(query, function(err, ans) {
          if (err) { throw err; }
          else {
            console.log(query);
          }
        });
      }
    }
  );
}
