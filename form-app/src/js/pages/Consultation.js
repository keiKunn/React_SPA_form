import React from "react";
import LinkSetting from "../components/LinkSetting";
import TitleArea from "../components/TitleArea";

export default class Consultation extends React.Component {
  render() {
    return (
      <div>
        <TitleArea stepNumber="STEP3" titleText="ご相談内容をご記入ください" />
        <div>
          -- ご相談内容 --
        </div>
        <textarea>
        </textarea>
        <LinkSetting nextPage="/" backPage="/Questions" />
      </div>
    );
  }
}