/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('login_ids', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'student'
    }
  }, {
    tableName: 'login_ids'
  });
};
