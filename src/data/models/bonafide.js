/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const bonafide = Model.define('bonafide', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  reqDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reason: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  otherReason: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  year: {
    type: DataTypes.INTEGER(4),
    allowNull: true,
  },
  printed: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
}, {
  tableName: 'bonafide',
});

export default bonafide;
