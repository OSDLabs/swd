/* eslint-disable no-unused-expressions */
const mysql = require('mysql');
const _ = require('lodash');
const config = require('./config.js');
const transform = require('./transform.js');
const util = require('./util.js');

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
_.forEach(transform, (rule) => {
  let selectQuery = null;
  if (rule.table.old.union) {
    console.log('union');
    selectQuery = `SELECT * FROM ${rule.table.old.union[0]} INNER JOIN (`;

    let count = 0;
    _.forEach(rule.table.old.union, (table) => {
      if (count === 0) {
        console.log('hi');
      } else if (count === 1) {
        selectQuery += table;
      } else {
        selectQuery += `, ${table}`;
      }
      count += 1;
    });

    selectQuery += `) ON (${rule.table.old.on})`;
  } else {
    selectQuery = `SELECT * FROM ${rule.table.old}`;
  }
  DEBUG && (selectQuery += ' LIMIT 5');
  selectQuery += ';';
  console.log(selectQuery);

  // Run the query
  source.query(selectQuery, (err, tuples) => {
    if (err) { throw err; }
    console.log(`\nCopying table ${rule.table.new}`);

    _.forEach(tuples, (tuple) => {
      let query = 'INSERT INTO ';
      query += rule.table.new;
      query += ' (';

      // Load fields in order
      let values = '';
      let count = 0;
      _.forEach(rule.fields, (field, fieldName) => {
        // Add comma if not the first item
        if (count !== 0) {
          query += ', ';
          values += ', ';
        }

        // Add field name to query
        query += fieldName;

        // TODO: Add various data cleaning techniques here
        const attribute = field;

        // check if there's a condition
        if (attribute.if) {
          if (util.conditionEval(attribute.if.condition, tuple)) {
            values += `"${attribute.if.pass.value}"`;
          } else {
            values += `"${attribute.if.fail.value}"`;
          }
        } else {
          values += `"${tuple[field]}"`;
          count += 1;
        }
      }); // end forEach(fields)

      query += `) VALUES (${values}`;
      query += ');';

      // Run the query
      DEBUG && console.log(`${query}\n`);
      DEBUG || dest.query(query, (error) => {
        if (error) { throw err; } else {
          console.log(query);
        }
      });
    }); // end of forEach(res)
  });
});
