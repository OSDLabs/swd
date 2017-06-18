/* jshint indent: 2 */

import DataTypes from 'sequelize';
import Model from '../sequelize';

const Notices_Categories = Model.define('notices_categories', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'notices_categories'
  });

export default Notices_Categories;
