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
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

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
        <Toolbar>
          <ToolbarGroup>
            <a href="/">
              <img
                src={logoUrl}
                width="80"
                height="80"
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
            <RaisedButton label="Login" primary onTouchTap={this.handleLoginOpen} />
            <IconMenu
              iconButtonElement={
                <IconButton touch>
                  <NavigationExpandMoreIcon />
                </IconButton>
            }
            >
              <MenuItem primaryText="Migration" />
              <MenuItem primaryText="Contact us" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <LoginModal
          open={this.state.loginModalOpen}
          onRequestClose={this.handleLoginClose}
        />
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
