/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merchandise', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'merchandise'
  });
};
