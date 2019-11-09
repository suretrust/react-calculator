/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ wide, color, name, handleClick }) => {
  const classes = `${color} ${
    wide ? 'fifty-percent' : 'twenty-five-percent'
  }`.trim();

  return (
    <button onClick={() => handleClick(name)} className={classes}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: 'orange'
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default Button;
