/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Product_Page_Contents = Model.define('product_page_contents', {
    prodId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    variant: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'product_page_contents'
  });

export default Product_Page_Contents;
