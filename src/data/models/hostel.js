/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const hostel = Model.define('hostel', {
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

export default hostel;
