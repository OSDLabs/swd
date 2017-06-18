/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const DayPassTableGate = Model.define('daypasstablegate', {
    daypass_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    ID: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DayPassDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DayPassApproved: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'daypasstablegate'
  });

export default DayPassTableGate;
