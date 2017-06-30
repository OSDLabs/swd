/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('info_update', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    tableName: 'info_update',
  });
};
