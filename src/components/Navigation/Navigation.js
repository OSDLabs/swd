/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// Utility module for using multiple class names in HTML elements
import classnames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// Selectively import materialize.css as and when needed in your components
import sm from 'materialize-css/bin/materialize.css';
// Import custom navigation styles
import s from './Navigation.css';
import logoUrl from './logo-small.png';
import LoginModal from './LoginModal';


class Navigation extends React.Component {

  state = {
    loginModalOpen: false,
  };

  handleLoginOpen = () => {
    this.setState({ loginModalOpen: true });
  };

  handleLoginClose = () => {
    this.setState({ loginModalOpen: false });
  };

  render() {
    return (
      <div>
        <nav className={classnames(sm.blueGrey, sm.lighten5)}>
          <div className={classnames(sm.navWrapper)}>
            <a href="/" className={classnames(sm.brandLogo, sm.tealText)}><img src={logoUrl} width="60" height="60" style={{ padding: 10 }} alt="SWD" />Student Welfare Division</a>
            <ul id={sm.navMobile} className={classnames(sm.right, sm.hideOnMedAndDown)}>
              <li><a href="#!" className={classnames(sm.tealText)}>Contact Us</a></li>
              <li><a href="#!" className={classnames(sm.tealText)}>Student Search</a></li>
              <li>
                <a onTouchTap={this.handleLoginOpen} className={classnames(sm.tealText)}>Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <LoginModal
          open={this.state.loginModalOpen}
          onRequestClose={this.handleLoginClose}
        />
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
