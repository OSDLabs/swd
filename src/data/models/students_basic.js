/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Students_Basic = Model.define('students_basic', {
  login_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
    primaryKey: true,
  },
  student_name: {
    type: DataTypes.STRING(200),
    allowNull: false,
    defaultValue: '',
  },
  hostel: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  id: {
    type: DataTypes.STRING(12),
    allowNull: false,
    defaultValue: '',
  },
}, {
  tableName: 'students_basic',
});

export default Students_Basic;
