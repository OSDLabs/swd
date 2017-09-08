/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const dayScholar = Model.define('dayScholar', {
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'student',
      key: 'id'
    }
  }
}, {
  tableName: 'dayScholar'
});

export default dayScholar;