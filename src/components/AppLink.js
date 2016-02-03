/**
 * Created by chetanv on 03/02/16.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import Url from 'url';
import pathToRegExp from 'path-to-regexp';

import LocationActions from '../actions/LocationActions';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class AppLink extends Component {

  static contextTypes = {
    dispatch: PropTypes.func.isRequired
  };

  static propTypes = {
    to: PropTypes.string.isRequired,
    query: PropTypes.object,
    data: PropTypes.object,
    hash: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    query: {},
    data: {},
    onClick: emptyFunction
  };

  render() {
    const { to, query, hash, data } = this.props;
    const url = Url.format({pathname: to, query: query, hash: hash});
    const path = pathToRegExp.compile(url)(data);
    return (
      <a href={path} onClick={this.handleClick.bind(null, path)}>
        {this.props.children}
      </a>
    );
  }

  handleClick = (path, event) => {
    let allowTransition = true;
    let clickResult;

    if (this.props && this.props.onClick) {
      clickResult = this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (clickResult === false || event.defaultPrevented === true) {
      allowTransition = false;
    }

    event.preventDefault();

    if (allowTransition) {
      this.context.dispatch(LocationActions.setPath(path));
    }
  };
}

export default AppLink;