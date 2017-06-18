/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Institure_Holidays = Model.define('institure_holidays', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'institure_holidays'
  });

export default Institure_Holidays;
