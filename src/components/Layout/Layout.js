
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import s from './Layout.css';
import Header from '../Header';
// import Feedback from '../Feedback';
import Footer from '../Footer';
import DrawerItems from '../Drawer';
import Navigation from '../Navigation'


// react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI,
// especially useful for the buttons.
injectTapEventPlugin();

class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
  };

  state = {
    drawerOpen: true,
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <div>
          <Header
          />
          {this.props.children}
          {// <Feedback />
          }
          <Footer
          isLoggedIn={this.props.isLoggedIn}
          />
        </div>
      );
    }
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 256;
    }

    return (
      <div>
        <div style={contentStyle}>
          <Navigation 
          toggleFunc={this.handleDrawerToggle}
          drawerOpen={this.state.drawerOpen}
          isLoggedIn={this.props.isLoggedIn}
          />
          {this.props.children}
          {// <Feedback />
          }
          <Footer
          isLoggedIn={this.props.isLoggedIn}
          />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default withStyles(s)(Layout);
