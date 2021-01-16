import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import UserInfo from "./pages/UserInfo";
import Questions from "./pages/UserInfo";
import Consultation from "./pages/Consultation";

// エントリーポイント
const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={UserInfo}></Route>
      <Route path="/Questions" component={Questions}></Route>
      <Route path="/Consultation" component={Consultation}></Route>
    </Layout>
  </Router>,
app);

