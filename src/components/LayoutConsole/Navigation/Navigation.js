/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes }from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Drawer from 'material-ui/Drawer';

// Import custom navigation styles
import s from './Navigation.css';
import logoUrl from './logo-small.png';


class Navigation extends React.Component {
  static propTypes = {
    toggleFunc: PropTypes.node.isRequired,
  };

  render() {
    return (
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton
              label="Open"
              onTouchTap={this.props.toggleFunc}
              primary
            />
            <a href="/">
              <img
                src={logoUrl}
                width="50"
                height="50"
                style={{ padding: 20 }}
                alt="SWD"
              />
            </a>
            <ToolbarTitle text="SWD" href="/" />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton tooltip="Search Students" href="/search">
              <ActionSearch />
            </IconButton>
            <ToolbarSeparator />
            <RaisedButton label="Logout" primary />
            <IconMenu
              iconButtonElement={
                <IconButton touch>
                  <NavigationExpandMoreIcon />
                </IconButton>
            }
            >
              <MenuItem primaryText="My Profile" />
              <MenuItem primaryText="Logout" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
    );
  }
}

export default withStyles(s)(Navigation);
