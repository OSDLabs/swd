/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Notices = Model.define('notices', {
  id: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  archived: {
    type: DataTypes.INTEGER(1).UNSIGNED,
    allowNull: false,
    defaultValue: '0',
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
    defaultValue: '',
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: '',
  },
  published: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  updated: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'notices',
});

export default Notices;
