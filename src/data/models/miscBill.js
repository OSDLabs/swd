/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('miscBill', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'miscBill'
  });
};
