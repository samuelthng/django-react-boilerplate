import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import { setTitle } from '../actions';

class Landing extends Component {
  static propTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('Landing did mount.'); // eslint-disable-line no-console
    this.props.setTitle("Django-React Frontend | Landing Page");
  }

  componentDidUpdate() {
    console.log('Landing did update.'); // eslint-disable-line no-console
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (isEqual(nextProps, prevProps)) return null;
    return nextProps; // Map all props to state when props change.
  }

  render() {
    return (
      <div className="d-flex flex-column h-100 py-auto text-center justify-content-center align-items-center">
        <span className="display-1">React Test</span>
        <hr />
        <p>Hello World!</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.app });
export default connect(mapStateToProps, { setTitle })(Landing);
