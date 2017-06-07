/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_page_contents', {
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
};
