/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Mess_Option_Future = Model.define('mess_option_future', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    mess: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'mess_option_future'
  });

export default Mess_Option_Future;
