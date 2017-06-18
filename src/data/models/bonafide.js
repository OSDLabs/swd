/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Bonafide = Model.define('bonafide', {
    login_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    printed: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    index_: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    req_date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    other_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'bonafide'
  });

export default Bonafide;