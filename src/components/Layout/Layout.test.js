/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions, no-undef */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from '../App';
import Layout from './Layout';


const muiTheme = getMuiTheme({
  userAgent: navigator.userAgent,
});

describe('Layout', () => {

  it('should render children correctly', () => {
    const wrapper = render(
      <App context={{ insertCss: () => {}, muiTheme }}>
        <Layout>
          <div className="child" />
        </Layout>
      </App>,
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});
