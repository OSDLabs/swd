/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const facultyIncharge = Model.define('facultyIncharge', {
  facultyId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'faculty',
      key: 'loginId',
    },
  },
  function: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
}, {
  tableName: 'facultyIncharge',
});

export default facultyIncharge;
