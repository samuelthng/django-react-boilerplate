import React, { Fragment, memo } from 'react';
import { connect } from 'react-redux';

import { isEmpty } from 'lodash';
import { withCookies, Cookies, CookiesProvider } from 'react-cookie';
import PropTypes, { instanceOf } from "prop-types";

import { setCSRF } from '../actions';


const CSRFSetter = ({ csrf, cookies, setCSRF }) => {
  if (isEmpty(csrf)) setCSRF(cookies.get('csrftoken'));
  return <Fragment />;
};

CSRFSetter.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
  setCSRF: PropTypes.func.isRequired,
  csrf: PropTypes.string
};

const mapStateToProps = ({ app }) => {
  const { csrf } = app;
  return { csrf };
};

const _CSRF = memo(withCookies(connect(mapStateToProps, { setCSRF })(CSRFSetter)));

/**
 * This pure component sets the CSRF Token from a cookie to the app object in global store.
 * 
 */
export const CSRF = () => <CookiesProvider><_CSRF /></CookiesProvider>;
export default CSRF;