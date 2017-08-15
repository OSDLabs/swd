/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const InOutDetails = Model.define('inoutdetails', {
  ID: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  Hostel: {
    type: DataTypes.STRING(4),
    allowNull: true,
    defaultValue: null,
  },
  Room: {
    type: DataTypes.STRING(3),
    allowNull: true,
    defaultValue: null,
  },
  Phone: {
    type: DataTypes.STRING(10),
    allowNull: true,
    defaultValue: null,
  },
  Place: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  OutDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  OutTime: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  InDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  InTime: {
    type: DataTypes.TIME,
    allowNull: true,
    defaultValue: null,
  },
  OnCampus: {
    type: DataTypes.INTEGER(1),
    allowNull: true,
    defaultValue: null,
  },
  exit_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  OnLeave: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    defaultValue: '0',
  },
}, {
  tableName: 'inoutdetails',
});

export default InOutDetails;
