import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from "prop-types";

class title extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps(props, state) {
    if (props.title !== state.title) return {
      title: props.title
    };
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  render() {
    document.title = this.state.title;
    return <Fragment />;
  }

}

const mapStateToProps = ({ app }) => {
  const { title } = app;
  return { title };
};

/**
 * This pure component sets the Browser Window Title from the `app.title` property in the global store.
 * Use the `setTitle` action to update the page title.
 * 
 */
export const Title = connect(mapStateToProps, null)(title);
export default Title;