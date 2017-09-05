/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Nucleus = Model.define('nucleus', {
  login_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '',
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: '',
  },
  chamber: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  office: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
}, {
  tableName: 'nucleus',
});

export default Nucleus;
