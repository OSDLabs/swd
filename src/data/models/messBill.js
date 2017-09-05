/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messBill', {
    studentId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    month: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'messBill'
  });
};
