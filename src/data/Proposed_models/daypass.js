/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daypass', {
    daypass_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ApprovedBy: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Approved: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    consent_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'daypass'
  });
};
