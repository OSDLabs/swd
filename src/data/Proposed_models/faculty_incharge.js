/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faculty_incharge', {
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
    }
  }, {
    tableName: 'faculty_incharge'
  });
};
