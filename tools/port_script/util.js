const _ = require('lodash');

/**
 * Function to evaluate conditions recursively
 * @param condition Object  The condition to evaluate
 * @param tuple      Object  The tuple so that conditions can be evaluated
 * @return          boolean Evaluated result
 */
function conditionEval(condition, tuple) {
  if (condition.eval) {
    const first = tuple[condition.eval.first_attribute] || condition.eval.first_value || null;
    const second = tuple[condition.eval.second_attribute] || condition.eval.second_value || null;

    switch (condition.eval.operator) {
      case '==':
      case '===':
        if (first === second) {
          return true;
        }
        return false;
      default:
        throw new Error('Operator not supported');
    }
  } else if (condition.or) {
    return _.some(condition.or, obj => conditionEval(obj, tuple));
  } else if (condition.and) {
    return _.every(condition.and, obj => conditionEval(obj, tuple));
  } else {
    throw new Error('Could not find eval or a condition');
  }
}

/**
 * Evaluate if condition
 * @param block     Object  The whole if block
 * @param tuple     Object  The tuple so that conditions can be evaluated
 * @return          boolean Evaluated result
 */
function evalIf(block, tuple) {
  if (conditionEval(block.condition, tuple)) {
    return block.pass.value;
  }
  return block.fail.value;
}

/**
 * Evaluate switch condition.
 * @param block     Object  The whole switch block
 * @param tuple     Object  The tuple so that conditions can be evaluated
 * @return          boolean Evaluated result
 */
function evalSwitch(block, tuple) {
  return block.cases[tuple[block.condition]];
}

/**
 * Evaluate expression recursively
 * @param field     Object  The whole attribute from the config file
 * @param tuple     Object  The tuple so that conditions can be evaluated
 * @return          boolean Evaluated result
 */
function evalExp(field, tuple) {
  if (field.if) {
    // evaluate if block
    return evalIf(field.if, tuple);
  } else if (field.switch) {
    // send the value as it is
    return evalSwitch(field.switch, tuple);
  } else if (field.value) {
    // send the value as it is
    return field.value;
  }
  // evaluate a value
  return tuple[field];
}

/**
 * Generate and return SELECT query from the config
 * @param block     Object  The block containing the query config
 * @return          String  The generated SELECT query
 */
function getSelectQuery(block) {
  let table;
  let where = '';
  let limit = '';

  // Get table
  if (block.union) {
    table = `${block.union[0]} INNER JOIN \
      (${_.join(_.drop(block.union, 1), ',')}) ON (${block.on})`;
  } else if (block.table) {
    table = block.table;
  } else {
    table = block;
  }

  // Get where clause
  if (block.where) {
    where = `WHERE ${block.where}`;
  }

  // Get limit clause
  if (block.limit) {
    limit = `LIMIT ${block.limit}`;
  }

  return `SELECT * FROM ${table} ${where} ${limit};`;
}

// Export the modules
module.exports = {
  evalExp,
  getSelectQuery,
};
