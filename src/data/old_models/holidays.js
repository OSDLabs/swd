/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Holidays = Model.define('holidays', {
  HolDate: {
    type: DataTypes.DATE,
    allowNull: false,
    primaryKey: true,
  },
}, {
  tableName: 'holidays',
});

export default Holidays;
