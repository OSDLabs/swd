/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const CGPA = Model.define('cgpa', {
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
    },
    cgpa: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'cgpa'
  });

export default CGPA;
