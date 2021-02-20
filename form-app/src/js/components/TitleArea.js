import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default class TitleArea extends React.Component {

  render() {
    const stepNumber = this.props.stepNumber;
    const titleText = this.props.titleText;

    return (
      <div>
        <span className="tag">{stepNumber}</span>
        <div className="columns is-centered">
          <div className="column is-half">
            <span className="is-size-4 has-text-dark is-centered"><FontAwesomeIcon icon={faAddressCard} />{titleText}</span>
          </div>
        </div>
      </div>
    );
  }
}