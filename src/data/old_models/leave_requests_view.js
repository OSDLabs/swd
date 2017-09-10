/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Leave_Requests_View = Model.define('leave_requests_view', {
  id: {
    type: DataTypes.STRING(12),
    allowNull: false,
    primaryKey: true,
  },
  student_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  leave_id: {
    type: DataTypes.INTEGER(20),
    allowNull: false,
  },
  login_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  start_date: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  end_date: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER(15),
    allowNull: false,
  },
  consent_type: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  approved_by: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  approved: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'leave_requests_view',
});

export default Leave_Requests_View;
