/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loginType', {
    id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'loginType'
  });
};
