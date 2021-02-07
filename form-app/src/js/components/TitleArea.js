import React from "react";

export default class TitleArea extends React.Component {

  render() {
    const stepNumber = this.props.stepNumber;
    const titleText = this.props.titleText;

    return (
      <div>
        {stepNumber}
        <p>{titleText}</p>
      </div>
    );
  }
}