import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserInfo from "./js/pages/UserInfo";
import Questions from "./js/pages/Questions";
import Consultation from "./js/pages/Consultation";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={UserInfo}></Route>
            <Route path="/Questions" component={Questions}></Route>
            <Route path="/Consultation" component={Consultation}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;