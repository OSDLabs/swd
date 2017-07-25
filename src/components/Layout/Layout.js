
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import s from './Layout.css';
import Header from '../Header';
// import Feedback from '../Feedback';
import Footer from '../Footer';


// react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI,
// especially useful for the buttons.
injectTapEventPlugin();

class Layout extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={this.context.muiTheme}>
        <div>
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </MuiThemeProvider>
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
