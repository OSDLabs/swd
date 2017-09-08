/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const inOutDetail = Model.define('inOutDetail', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'student',
      key: 'id'
    }
  },
  place: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  outDateTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  inDateTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  onCampus: {
    type: DataTypes.INTEGER(1),
    allowNull: true
  },
  onLeave: {
    type: DataTypes.INTEGER(1),
    allowNull: true
  }
}, {
  tableName: 'inOutDetail'
});

export default inOutDetail;