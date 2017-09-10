/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const noticeCategories = Model.define('noticeCategories', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'noticeCategories',
});

export default noticeCategories;
