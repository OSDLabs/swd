/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const faculty = Model.define('faculty', {
  loginId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'loginId',
      key: 'loginId'
    }
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  chamber: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  office: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'faculty'
});

export default faculty;