/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// Import custom footer styles
import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.footer} >
        <div className={s.container}>
          <div>
            <h3 className={s.whiteText}>More</h3>
            <ul>
              <li><a className={s.whiteText} href="/swd-services">SWD Services</a></li>
              <li><a className={s.whiteText} href="/csa">CSA</a></li>
              <li><a className={s.whiteText} href="/activity-center">Activity Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className={s.whiteText}>Connect</h3>
            <ul>
              <li><a className={s.whiteText} href="#!">Link 1</a></li>
              <li><a className={s.whiteText} href="#!">Link 2</a></li>
              <li><a className={s.whiteText} href="#!">Link 3</a></li>
              <li><a className={s.whiteText} href="#!">Link 4</a></li>
            </ul>
          </div>
          <div>
            <h3 className={s.whiteText}>Connect</h3>
            <ul>
              <li><a className={s.whiteText} href="#!">Contact Us</a></li>
              <li><a className={s.whiteText} href="#!">About Us</a></li>
              <li><a className={s.whiteText} href="#!">Link 3</a></li>
              <li><a className={s.whiteText} href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
        <div className={s.footerCopyright}>
          <span className={s.whiteText}>Developed By OSDLabs</span>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
