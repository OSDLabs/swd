/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const ps = Model.define('ps', {
  id: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  psStation: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  thesis: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
}, {
  tableName: 'ps',
});

export default ps;
