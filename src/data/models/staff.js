/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const staff = Model.define('staff', {
  loginId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'loginId',
      key: 'loginId'
    }
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false
  }
}, {
  tableName: 'staff'
});

export default staff;
