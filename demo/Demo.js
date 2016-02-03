/**
 * Created by chetanv on 31/01/16.
 */

import React, { Component, PropTypes } from 'react';
import MyApp from './apps/MainApp/MainApp'

class Demo extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return <MyApp.RenderApp />;
  }
}

export default Demo;