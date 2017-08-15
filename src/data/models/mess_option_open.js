/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Mess_Option_Open = Model.define('mess_option_open', {
  open: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: '0',
    primaryKey: true,
  },
  next_month: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '',
  },
}, {
  tableName: 'mess_option_open',
});

export default Mess_Option_Open;
