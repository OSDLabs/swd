/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('mess_option_open', {
    open: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true,
    },
    next_month: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
    },
  }, {
    tableName: 'mess_option_open',
  });
};
