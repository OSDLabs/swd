/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const LeaveTableGate = Model.define('leavetablegate', {
  leave_id: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
  },
  ID: {
    type: DataTypes.STRING(12),
    allowNull: true,
    defaultValue: null,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  LeaveStart: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  LeaveEnd: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  LeaveApproved: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'leavetablegate',
});

export default LeaveTableGate;
