/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LayoutConsole.css';
import Navigation from './Navigation';
// import Feedback from '../Feedback';
import Footer from './Footer';
import DrawerItems from './Drawer'

class LayoutConsole extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    drawerOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 256;
    }
    return (
      <div>
        <div style={contentStyle}>
          <Navigation 
          toggleFunc={this.handleDrawerToggle}
          />
          {this.props.children}
          {// <Feedback />
          }
          <Footer />
        </div>
        <div>
        <DrawerItems
          open={this.state.drawerOpen}
        />
        </div> 
      </div>
    );
  }
}

export default withStyles(s)(LayoutConsole);
