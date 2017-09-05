/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warden', {
    facultyId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faculty',
        key: 'loginId'
      }
    },
    hostel: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    residence: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'warden'
  });
};
