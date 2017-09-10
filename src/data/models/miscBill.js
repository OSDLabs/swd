/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const miscBill = Model.define('miscBill', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
  },
  studentId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
}, {
  tableName: 'miscBill',
});

export default miscBill;
