/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('mess_option_future_view', {
    id: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    student_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    login_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mess: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    tableName: 'mess_option_future_view',
  });
};
