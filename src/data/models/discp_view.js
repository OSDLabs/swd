/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const DiscpView = Model.define('discp_view', {
  id: {
    type: DataTypes.STRING(12),
    allowNull: false,
    primaryKey: true,
  },
  student_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  login_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  heading: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  action: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  severe: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  },
  date: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'discp_view',
});

export default DiscpView;
