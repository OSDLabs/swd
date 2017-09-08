/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const transaction = Model.define('transaction', {
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'student',
      key: 'id'
    }
  },
  merchId: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references: {
      model: 'merchandise',
      key: 'id'
    }
  },
  optionId: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    references: {
      model: 'merchandiseOption',
      key: 'id'
    }
  }
}, {
  tableName: 'transaction'
});

export default transaction;