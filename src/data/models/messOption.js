/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const messOption = Model.define('messOption', {
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'student',
      key: 'id'
    }
  },
  monthYear: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'messOptionMonthYear',
      key: 'monthYear'
    }
  },
  mess: {
    type: DataTypes.STRING(1),
    allowNull: true
  }
}, {
  tableName: 'messOption'
});

export default messOption;
