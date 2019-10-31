import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const wide = this.props.wide ? 'fifty-percent' : '';
    const color = this.props.color || '';
    const classes = `${color} ${wide}`.trim();

    return <button className={classes}>{this.props.name}</button>;
  }
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
