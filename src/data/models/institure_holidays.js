/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Institure_Holidays = Model.define('institure_holidays', {
  // required?
  // id: {
  //   type: DataTypes.INTEGER(11).UNSIGNED,
  //   allowNull: false,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  date: {
    type: DataTypes.BIGINT(20),
    allowNull: false,
    primaryKey: true,
  },
}, {
  tableName: 'institure_holidays',
});

export default Institure_Holidays;
