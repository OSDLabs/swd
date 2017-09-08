/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const holiday = Model.define('holiday', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    primaryKey: true
  },
  institute: {
    type: DataTypes.INTEGER(1),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'holiday'
});

export default holiday;
