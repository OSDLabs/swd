/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('leave_day_counts', {
    loginid: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'leave_day_counts',
  });
};
