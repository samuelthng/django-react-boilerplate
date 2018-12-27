import React, { Component, Fragment, memo } from 'react';
import { connect } from 'react-redux';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(state) {
    console.log(`StoreLog: `, { state }); //eslint-disable-line no-console
    return null;
  }

  render() {
    return <Fragment />;
  }
}

/**
 * This component logs the store to console everytime there is a state change.
 */
export const StoreLog = memo(connect(state => ({ ...state }))(Store));
export default StoreLog;