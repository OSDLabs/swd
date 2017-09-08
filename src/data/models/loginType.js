/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const loginType = Model.define('loginType', {
  id: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'loginType'
});

export default loginType;