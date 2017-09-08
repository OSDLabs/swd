/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const messOptionMonthYear = Model.define('messOptionMonthYear', {
  monthYear: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true
  },
  dateOpen: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dateClose: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'messOptionMonthYear'
});

export default messOptionMonthYear;
