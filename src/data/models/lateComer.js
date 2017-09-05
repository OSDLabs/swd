/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lateComer', {
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
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'lateComer'
  });
};
