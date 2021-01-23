import React from "react";
import { Link } from "react-router-dom";

export default class Layout extends React.Component {

  render() {
    const nextPage = this.props.nextPage;
    const backPage = this.props.backPage;

    return (
      <div>
        {backPage && <Link to={backPage}>前へ戻る</Link> } {nextPage && <Link to={nextPage}>次へ進む</Link> } 
      </div>
      
    );
  }
}