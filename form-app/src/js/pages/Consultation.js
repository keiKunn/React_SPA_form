import React from "react";
import Layout from "./Layout";

export default class Consultation extends React.Component {
  render() {
    return (
      <div>
        <div>
          STEP3
          <p>ご相談内容をご記入ください</p>
        </div>
        <div>
          -- ご相談内容 --
        </div>
        <textarea>
        </textarea>
        <Layout nextPage="/" backPage="/Questions" />
      </div>
    );
  }
}