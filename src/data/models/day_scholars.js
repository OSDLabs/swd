/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Day_Scholars = Model.define('day_scholars', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'day_scholars'
  });

export default Day_Scholars;
