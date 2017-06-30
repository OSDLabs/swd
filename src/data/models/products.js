/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Products = Model.define('products', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  login_id: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  studentId: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  hostel: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  room: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  product: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nick: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  S: {
    type: DataTypes.INTEGER(50),
    allowNull: true,
  },
  M: {
    type: DataTypes.INTEGER(50),
    allowNull: true,
  },
  L: {
    type: DataTypes.INTEGER(50),
    allowNull: true,
  },
  XL: {
    type: DataTypes.INTEGER(50),
    allowNull: true,
  },
  XXL: {
    type: DataTypes.INTEGER(50),
    allowNull: true,
  },
}, {
  tableName: 'products',
});

export default Products;
