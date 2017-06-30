/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('leavetablegate', {
    leave_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
    },
    ID: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    LeaveStart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LeaveEnd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LeaveApproved: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
  }, {
    tableName: 'leavetablegate',
  });
};
