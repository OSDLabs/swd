/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notices_categories', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'notices_categories'
  });
};
