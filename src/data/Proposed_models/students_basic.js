/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('students_basic', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    student_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '',
    },
    hostel: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: '',
    },
  }, {
    tableName: 'students_basic',
  });
};
