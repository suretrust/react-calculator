/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, calcProcess }) => {
  return (
    <div className="display">
      <p>{calcProcess}</p>
      <p className="result">{result}</p>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
  calcProcess: 'Ready'
};

Display.propTypes = {
  result: PropTypes.string,
  calcProcess: PropTypes.string
};

export default Display;
