/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cgpa_view', {
    id: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    student_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cgpa: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'cgpa_view'
  });
};
