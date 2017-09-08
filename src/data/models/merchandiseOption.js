/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const merchandiseOption = Model.define('merchandiseOption', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  size: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  nick: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'merchandiseOption'
});

export default merchandiseOption;
