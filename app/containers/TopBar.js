import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { logoutAction } from '../actions/auth';
import { getSelectPathname } from '../selectors/router';


class TopBar extends Component {
  getRoutePathname() {
    const { pathname } = this.props;
    switch (pathname) {
      case '/transactions':
        return 'transactions';
      case '/accounts':
        return 'accounts';
      case '/categories':
        return 'categories';
      default:
        return 'home';
    }
  }

  render() {
    const { logout } = this.props;
    const route = this.getRoutePathname();

    return (
      <Menu pointing secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={route === 'home'}
        />
        <Menu.Item
          as={Link}
          to="/transactions"
          name="transactions"
          active={route === 'transactions'}
        />
        <Menu.Item
          as={Link}
          to="/accounts"
          name="accounts"
          active={route === 'accounts'}
        />
        <Menu.Item
          as={Link}
          to="/categories"
          name="categories"
          active={route === 'categories'}
        />
        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={logout} />
        </Menu.Menu>
      </Menu>
    );
  }
}

TopBar.propTypes = {
  logout: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pathname: getSelectPathname(),
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logoutAction());
  },
});

const TopBarRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);

export default TopBarRedux;

