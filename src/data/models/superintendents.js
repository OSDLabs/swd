/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Superintendents = Model.define('superintendents', {
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
    },
    residence: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'superintendents'
  });

export default Superintendents;
