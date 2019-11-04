import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const wide = this.props.wide ? 'fifty-percent' : 'twenty-five-percent';
    const classes = `${this.props.color} ${wide}`.trim();

    return <button className={classes}>{this.props.name}</button>;
  }
}

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
