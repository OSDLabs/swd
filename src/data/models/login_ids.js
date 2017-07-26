/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Login_IDs = Model.define('login_ids', {
  login_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
    primaryKey: true,
    unique: true,
  },
  type: {
    type: DataTypes.STRING(11),
    allowNull: false,
    defaultValue: 'student',
  },
}, {
  tableName: 'login_ids',
});

export default Login_IDs;
