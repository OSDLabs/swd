/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holiday', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    institute: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'holiday'
  });
};
