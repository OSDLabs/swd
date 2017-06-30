/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('wardens', {
    login_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
    },
    hostel: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: '',
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    chamber: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    office: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    residence: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  }, {
    tableName: 'wardens',
  });
};
