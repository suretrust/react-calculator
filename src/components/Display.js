import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return <div>{this.props.result}</div>;
  }
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
