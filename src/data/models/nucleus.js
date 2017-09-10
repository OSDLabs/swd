/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const nucleus = Model.define('nucleus', {
  facultyId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'faculty',
      key: 'loginId',
    },
  },
}, {
  tableName: 'nucleus',
});

export default nucleus;
