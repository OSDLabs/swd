/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ps', {
    id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    psStation: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    thesis: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'ps'
  });
};
