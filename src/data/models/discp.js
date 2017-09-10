/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Discp = Model.define('discp', {
  login_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '',
    primaryKey: true,
  },
  heading: {
    type: DataTypes.STRING(200),
    allowNull: false,
    defaultValue: '',
  },
  action: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  severe: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: '0',
  },
  date: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '0',
  },
}, {
  tableName: 'discp',
});

export default Discp;
