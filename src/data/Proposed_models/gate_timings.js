/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gate_timings', {
    Day: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    In_Time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Out_Time: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'gate_timings'
  });
};
