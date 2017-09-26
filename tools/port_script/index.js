const mysql = require('mysql');
const config = require('./config.js');
const transform = require('./transform.js');
const _ = require('lodash');

const DEBUG = 1;

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


_.forEach(transform, (rule) => {
  let select_query = null;
  if (rule.table.old.union) {
    console.log('union');
    select_query = 'SELECT * FROM ' + rule.table.old.union[0] + ' INNER JOIN (';

    let count = 0;
    _.forEach(rule.table.old.union, (table) => {

      if (count == 0) {
        console.log('hi');
      } else if (count == 1) {
        select_query += table;
      } else {
        select_query += ', ' + table;
      }
      count++;
    });

    select_query += ') ON (' + rule.table.old.on + ')';
  } else {
    select_query = 'SELECT * FROM ' + rule.table.old;
  }
  DEBUG && (select_query += ' LIMIT 5');
  select_query += ';';
  console.log(select_query);

  // Run the query
  source.query(select_query, function(err, tuples, fields) {

    if (err) { throw err; }
    console.log('\nCopying table ' + rule.table.new);

    _.forEach(tuples, (tuple) => {

      let query = 'INSERT INTO ';
      query += rule.table.new;
      query += ' (';

      // Load fields in order
      let values = '';
      let count = 0;
      _.forEach(rule.fields, (field, field_name) => {

        // Add comma if not the first item
        if (count != 0) {
          query += ', ';
          values += ', ';
        }

        // Add field name to query
        query += field_name;

        // TODO: Add various data cleaning techniques here
        let attribute = field;

        // check if there's a condition
        if (attribute.if) {

          if (condition_eval(attribute.if.condition, tuple)) {
            values += '"' + attribute.if.pass.value + '"';
          } else {
            values += '"' + attribute.if.fail.value + '"';
          }

        } else {
          values += '"' + tuple[field] + '"';
          count++;
        }
      }); // end forEach(fields)

      query += ') VALUES (' + values;
      query += ');';

      // Run the query
      DEBUG && console.log(query + '\n');
      DEBUG || dest.query(query, function(err, ans) {
        if (err) { throw err; }
        else {
          console.log(query);
        }
      });

    }); // end of forEach(res)
  });
});

function condition_eval(condition, data) {
  if (condition.eval) {
    let first = data[condition.eval.first_attribute] || condition.eval.first_value || null;
    let second = data[condition.eval.second_attribute] || condition.eval.second_value || null;

    switch (condition.eval.operator) {
      case '==':
      case '===':
        if (first == second) {
          return true;
        } else {
          return false;
        }
        break;
      default:
        throw 'Operator not supported';
    }
  } else if (condition.or) {
    // TODO: make this variable
    return condition_eval(condition.or[0], data) || condition_eval(condition.or[1], data);
  } else if (condition.and) {
    // TODO: make this variable
    return condition_eval(condition.or[0], data) && condition_eval(condition.or[1], data);
  } else {
    throw 'Could not find eval or a condition';
  }
}
