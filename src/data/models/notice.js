/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const notice = Model.define('notice', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references: {
      model: 'noticeCategories',
      key: 'id'
    }
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false
  },
  archived: {
    type: DataTypes.INTEGER(1),
    allowNull: false
  }
}, {
  tableName: 'notice'
});

export default notice;
