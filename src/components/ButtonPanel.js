/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="button-panel">
        <div className="row">
          <Button color="light-gray" name="AC" />
          <Button color="light-gray" name="+/-" />
          <Button color="light-gray" name="%" />
          <Button name="÷" />
        </div>
        <div className="row">
          <Button color="light-gray" name="7" />
          <Button color="light-gray" name="8" />
          <Button color="light-gray" name="9" />
          <Button name="X" />
        </div>
        <div className="row">
          <Button color="light-gray" name="4" />
          <Button color="light-gray" name="5" />
          <Button color="light-gray" name="6" />
          <Button name="-" />
        </div>
        <div className="row">
          <Button color="light-gray" name="1" />
          <Button color="light-gray" name="2" />
          <Button color="light-gray" name="3" />
          <Button name="+" />
        </div>
        <div className="row">
          <Button color="light-gray" wide={true} name="0" />
          <Button color="light-gray" name="." />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
