/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Info_Update = Model.define('info_update', {
  id: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  login_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  type: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: '',
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'info_update',
});

export default Info_Update;
