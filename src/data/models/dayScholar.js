/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dayScholar', {
    studentId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'id'
      }
    }
  }, {
    tableName: 'dayScholar'
  });
};
