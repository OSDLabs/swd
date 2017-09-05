/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hostel', {
    id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    hostel: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    room: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'hostel'
  });
};
