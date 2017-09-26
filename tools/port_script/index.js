/* eslint-disable no-unused-expressions */
const mysql = require('mysql');
const _ = require('lodash');
const config = require('./config.js');
const util = require('./util.js');

const rules = config.rules;
const DEBUG = 1;

// Connect to the source database
const source = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db.source,
});
source.connect((err) => {
  if (err) { throw err; }
  console.log('Connected to source');
});

// Connect to the destination
const dest = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db.destination,
});
dest.connect((err) => {
  if (err) { throw err; }
  console.log('Connected to destination');
});


// Start execution
_.forEach(rules, (rule) => {
  if (rule.query) {
    // if a rule is just a query, execute it
    DEBUG && console.log(`${rule.query}\n`);
    DEBUG || dest.query(rule.query, (error) => {
      if (error) { throw error; } else {
        console.log(rule.query);
      }
    });
  } else {
    // Get data from the source table
    source.query(util.getSelectQuery(rule.table.old), (err, tuples) => {
      if (err) { throw err; }
      console.log(`\nCopying table ${rule.table.new}\n`);

      _.forEach(tuples, (tuple) => {
        // Evaluate attribute for values
        const values = [];
        _.forEach(rule.fields, (field) => {
          values.push(util.evalExp(field, tuple));
        });

        // Build the query
        const query = `INSERT INTO ${rule.table.new} \
          (${_.join(_.keys(rule.fields), ', ')}) VALUES \
          ("${_.join(values, '", "')}");`;

        // Run the query
        DEBUG && console.log(`${query}\n`);
        DEBUG || dest.query(query, (error) => {
          if (error) { throw error; } else {
            process.stdout.write('.');
          }
        });
      });
    });
  }
});
