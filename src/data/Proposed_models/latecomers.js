/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('latecomers', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    time: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'latecomers'
  });
};
