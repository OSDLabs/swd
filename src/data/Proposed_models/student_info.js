/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('student_info', {
    student_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '',
    },
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    hostel: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    hostel_room: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    bday: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    father_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    father_phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    father_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    admit: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    gender: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    bloodgroup: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  }, {
    tableName: 'student_info',
  });
};
