/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facultyIncharge', {
    facultyId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faculty',
        key: 'loginId'
      }
    },
    function: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'facultyIncharge'
  });
};
