/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messOption', {
    studentId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    monthYear: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'messOptionMonthYear',
        key: 'monthYear'
      }
    },
    mess: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'messOption'
  });
};
