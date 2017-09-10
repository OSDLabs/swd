/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const lateComer = Model.define('lateComer', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'lateComer',
});

export default lateComer;
