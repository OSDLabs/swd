/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const superintendent = Model.define('superintendent', {
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
  residence: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
}, {
  tableName: 'superintendent',
});

export default superintendent;
