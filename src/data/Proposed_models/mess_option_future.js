/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mess_option_future', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    mess: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'mess_option_future'
  });
};
