/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discp', {
    login_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    heading: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    severe: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'discp'
  });
};
