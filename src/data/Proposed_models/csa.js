/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('csa', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
  }, {
    tableName: 'csa',
  });
};
