/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const warden = Model.define('warden', {
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

export default warden;