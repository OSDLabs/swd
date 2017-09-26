
// Function to evaluate conditions recursively
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

module.exports = {
  conditionEval,
};
