/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nucleus', {
    facultyId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faculty',
        key: 'loginId'
      }
    }
  }, {
    tableName: 'nucleus'
  });
};
