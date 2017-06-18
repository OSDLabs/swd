/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const CSA = Model.define('csa', {
  id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'csa'
  });

export default CSA;
