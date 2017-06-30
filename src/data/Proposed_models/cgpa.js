/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cgpa', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    cgpa: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'cgpa',
  });
};
