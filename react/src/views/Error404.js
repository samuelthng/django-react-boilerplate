import React from 'react';
import PropTypes from 'prop-types';

const Error404 = ({ location }) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

Error404.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Error404;
