/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const LateComers = Model.define('latecomers', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    time: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    login_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'latecomers'
  });

export default LateComers;
