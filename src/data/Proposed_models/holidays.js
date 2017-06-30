/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('holidays', {
    HolDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'holidays',
  });
};
