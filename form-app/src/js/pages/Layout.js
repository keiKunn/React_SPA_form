import React from "react";
import { Link } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children} {/**なぜこれが必要か→子コンポーネント(UserInfo,Questions,Consultation)を表示させるため？*/}
        <Link to="/Questions">次へ</Link>
      </div>
    );
  }
}