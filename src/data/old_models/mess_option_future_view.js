/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Mess_Option_Future_View = Model.define('mess_option_future_view', {
  id: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  student_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  login_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true,
  },
  mess: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  tableName: 'mess_option_future_view',
});

export default Mess_Option_Future_View;
