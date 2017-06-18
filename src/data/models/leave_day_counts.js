/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Leave_Day_Counts = Model.define('leave_day_counts', {
    loginid: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'leave_day_counts'
  });

export default Leave_Day_Counts;
