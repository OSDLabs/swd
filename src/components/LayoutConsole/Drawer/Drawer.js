import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import logoUrl from '../Navigation/logo-small.png';

export default class DrawerItems extends React.Component {
  static propTypes = {
    open: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Drawer open={this.props.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}