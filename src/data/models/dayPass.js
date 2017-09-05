/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dayPass', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    consentType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    approvedBy: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'dayPass'
  });
};
