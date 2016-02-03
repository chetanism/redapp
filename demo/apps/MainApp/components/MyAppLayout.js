/**
 * Created by chetanv on 02/02/16.
 */

import React, { Component, PropTypes } from 'react';
import AppLink from '../../../../src/components/AppLink';

class MyAppLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <AppLink to="/">Login</AppLink> |&nbsp;
          <AppLink to="/home">Home</AppLink> |&nbsp;
          <AppLink to="/user/">UserApp</AppLink> |&nbsp;
          <AppLink to="/user/another">UserAppAnotherPage</AppLink>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default MyAppLayout;