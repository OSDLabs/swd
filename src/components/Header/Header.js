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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './home-banner-world.png'

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
      <Navigation />
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>BITS Pilani</span>
          </Link>
          
          <div className={s.banner}>
          <img src={logoUrl} style={{marginLeft:10}} alt="SWD" />
            <h1 className={s.bannerTitle}>SWD</h1>
            <p className={s.bannerDesc}>Student Welfare Division</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
