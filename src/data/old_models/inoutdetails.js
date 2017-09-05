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
  },
  Hostel: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  Room: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  Phone: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  Place: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  OutDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  OutTime: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  InDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  InTime: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  OnCampus: {
    type: DataTypes.INTEGER(1),
    allowNull: true,
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
