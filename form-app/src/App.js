import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserInfo from "./js/pages/UserInfo";
import Questions from "./js/pages/Questions";
import Consultation from "./js/pages/Consultation";
import Confirmation from "./js/pages/Confirmation";
import 'bulma/css/bulma.css'

function App() {
  return (
      <Router>
          <Route exact path="/" component={UserInfo}></Route>
          <Route path="/Questions" component={Questions}></Route>
          <Route path="/Consultation" component={Consultation}></Route>
          <Route path="/Confirmation" component={Confirmation}></Route>
      </Router>
  );
}

export default App;