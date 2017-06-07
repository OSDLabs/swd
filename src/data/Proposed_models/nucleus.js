/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nucleus', {
    login_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    chamber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    office: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'nucleus'
  });
};
