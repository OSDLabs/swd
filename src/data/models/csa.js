/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const csa = Model.define('csa', {
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  csaEmail: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
}, {
  tableName: 'csa',
});

export default csa;
