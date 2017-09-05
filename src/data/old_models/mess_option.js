/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Mess_Option = Model.define('mess_option', {
  login_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  month: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '',
  },
  mess: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '',
  },
  index_: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  tableName: 'mess_option',
});

export default Mess_Option;
