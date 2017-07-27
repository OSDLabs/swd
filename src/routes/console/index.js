/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import LayoutConsole from '../../components/LayoutConsole';

const title = 'Admin Page';
const isAdmin = true;

export default {

  path: '/console',

  async action() {
    if (!isAdmin) {
      return { redirect: '/login' };
    }

    const Admin = await require.ensure([], require => require('./Admin').default, 'admin');

    return {
      title,
      chunk: 'admin',
      component: <LayoutConsole><Admin title={title} /></LayoutConsole>,
    };
  },

};
