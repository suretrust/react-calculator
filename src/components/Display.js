/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <span>{this.props.result}</span>
      </div>
    );
  }
}

Display.defaultProps = {
  result: "0"
};

Display.propTypes = {
  result: PropTypes.string
};

export default Display;
