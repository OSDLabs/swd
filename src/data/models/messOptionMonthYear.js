/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messOptionMonthYear', {
    monthYear: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    dateOpen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dateClose: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'messOptionMonthYear'
  });
};
