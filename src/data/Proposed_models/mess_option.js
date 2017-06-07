/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mess_option', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    month: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    mess: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    index_: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'mess_option'
  });
};
