/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('leave_requests', {
    leave_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    consent_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    approved_by: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    approved: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'leave_requests',
  });
};
