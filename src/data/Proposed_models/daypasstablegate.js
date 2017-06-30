/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('daypasstablegate', {
    daypass_id: {
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
    DayPassDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DayPassApproved: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
  }, {
    tableName: 'daypasstablegate',
  });
};
