/**
 * Created by chetanv on 02/02/16.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  static childContextTypes = {
    dispatch: PropTypes.func
  };

  getChildContext() {
    return {
      dispatch: this.props.dispatch
    };
  }

  static propTypes = {
    router: PropTypes.object
  };

  static defaultProps = {
    router: null
  };

  constructor(props) {
    super(props);
    this.state = {
      child: null
    };
  }

  componentDidMount() {
    this.renderPath(this.props.currentPath);
  }

  componentWillReceiveProps(nextProps) {
    const nextPath = nextProps.currentPath;
    if(nextPath != this.props.currentPath || !this.state.child) {
      this.renderPath(nextPath);
    }
  }

  render() {
    return this.state.child;
  }

  renderPath(path) {
    const { router } = this.props;
    router.dispatch({ path: path }, (state, component) => {
      this.setState({
        child: component
      });
    });
  }
}

function pathState(state) {
  return { currentPath: state.location.currentPath };
}

export default connect(pathState)(App);