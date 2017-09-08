/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const leave = Model.define('leave', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'student',
      key: 'id'
    }
  },
  dateStart: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dateEnd: {
    type: DataTypes.DATE,
    allowNull: true
  },
  reason: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  consentType: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  approvedBy: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  approved: {
    type: DataTypes.INTEGER(1),
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'leave'
});

export default leave;
