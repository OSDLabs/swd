/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Staff = Model.define('staff', {
  login_id: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: '',
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  chamber: {
    type: DataTypes.STRING(10),
    allowNull: true,
    defaultValue: null,
  },
  office: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'staff',
});

export default Staff;
