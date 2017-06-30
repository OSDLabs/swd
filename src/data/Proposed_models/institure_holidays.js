/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('institure_holidays', {
    date: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  }, {
    tableName: 'institure_holidays',
  });
};
