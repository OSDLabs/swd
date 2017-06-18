/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Faculty_Incharge = Model.define('faculty_incharge', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    function: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    chamber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    office: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'faculty_incharge'
  });

export default Faculty_Incharge;
