/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const student = Model.define('student', {
  id: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'loginId',
      key: 'loginId',
    },
  },
  studentName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  bitsId: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true,
  },
  hostel: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  hostelRoom: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  bDay: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  bloodGroup: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  cgpa: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  admit: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  parentName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  parentPhone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  parentEmail: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'student',
});

export default student;
