/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Sequelize from 'sequelize';
import { databaseConfig } from '../config';

const sequelize = new Sequelize(databaseConfig.databasename, databaseConfig.user,
    databaseConfig.password, {
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    });

export default sequelize;
