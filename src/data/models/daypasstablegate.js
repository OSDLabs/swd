/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const DayPassTableGate = Model.define('daypasstablegate', {
  daypass_id: {
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
  DayPassDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  DayPassApproved: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'daypasstablegate',
});

export default DayPassTableGate;
