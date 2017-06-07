/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('day_scholars', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'day_scholars'
  });
};
