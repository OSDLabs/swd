/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const CGPA_View = Model.define('cgpa_view', {
  id: {
    type: DataTypes.STRING(12),
    allowNull: false,
    primaryKey: true,
  },
  student_name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cgpa: {
    type: DataTypes.INTEGER(10),
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'cgpa_view',
});

export default CGPA_View;
