/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('superintendents', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    function: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    login_id: {
      type: DataTypes.STRING(50),
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
    },
    residence: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'superintendents'
  });
};
