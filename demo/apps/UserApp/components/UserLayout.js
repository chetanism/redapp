/**
 * Created by chetanv on 02/02/16.
 */

import React, { Component, PropTypes } from 'react';
import AppLink from '../../../../src/components/AppLink';

class UserLayout extends Component {

  render() {
    return (
      <div>
        <nav>
          <AppLink to="/">Profile</AppLink> |
          <AppLink to="/settings">Settings</AppLink> |
          <AppLink to="/another">Another</AppLink>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default UserLayout;