/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Gate_Timings = Model.define('gate_timings', {
    Day: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    In_Time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Out_Time: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'gate_timings'
  });

export default Gate_Timings;
