/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Student = Model.define('student_info', {
  student_name: {
    type: DataTypes.STRING(200),
    allowNull: false,
    defaultValue: '',
  },
  login_id: {
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true,
    primaryKey: true,
    defaultValue: null,
  },
  hostel: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  hostel_room: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '',
    defaultValue: '',
  },
  bday: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  father_name: {
    type: DataTypes.STRING(200),
    allowNull: true,
    defaultValue: null,
  },
  father_phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  father_email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  admit: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  gender: {
    type: DataTypes.CHAR(5),
    allowNull: true,
    defaultValue: null,
  },
  bloodgroup: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'student_info',
});

export default Student;
