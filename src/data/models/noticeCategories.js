/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticeCategories', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'noticeCategories'
  });
};
