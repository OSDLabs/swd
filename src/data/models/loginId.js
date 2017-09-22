/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const loginId = Model.define('loginId', {
  loginId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
    references: {
      model: 'loginType',
      key: 'id',
    },
  },
  passHash: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  passSalt: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'loginId',
});

export default loginId;
