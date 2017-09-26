const _ = require('lodash');

const limit = 'LIMIT 5';

/**
* Function to evaluate conditions recursively
* @param condition Object  The condition to evaluate
* @param data      Object  The data so that conditions can be evaluated
* @return          boolean Evaluated result
*/
function conditionEval(condition, data) {
  if (condition.eval) {
    const first = data[condition.eval.first_attribute] || condition.eval.first_value || null;
    const second = data[condition.eval.second_attribute] || condition.eval.second_value || null;

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
    // TODO: make this variable
    return conditionEval(condition.or[0], data) || conditionEval(condition.or[1], data);
  } else if (condition.and) {
    // TODO: make this variable
    return conditionEval(condition.or[0], data) && conditionEval(condition.or[1], data);
  } else {
    throw new Error('Could not find eval or a condition');
  }
}

function evalIf(block, tuple) {
  if (conditionEval(block.condition, tuple)) {
    return block.pass.value;
  }
  return block.fail.value;
}

function evalExp(field, tuple) {
  if (field.if) {
    // evaluate if block
    return evalIf(field.if, tuple);
  } else if (field.value) {
    // send the value as it is
    return field.value;
  }
    // evaluate a value
  return tuple[field];
}

function getSelectQuery(block) {
  if (block.union) {
    // if there's a union field
    return `SELECT * FROM \
      ${block.union[0]} INNER JOIN (${_.join(_.drop(block.union, 1), ',')}) \
      ON (${block.on}) ${limit};`;
  }

  return `SELECT * FROM ${block} ${limit};`;
}

module.exports = {
  evalExp,
  getSelectQuery,
};
