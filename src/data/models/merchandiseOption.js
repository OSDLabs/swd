/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merchandiseOption', {
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
};
