import React from "react";
import Home from "./Home";
import Referred from "./Referred";
//import "../resources/styles.css";
require("../resources/styles.css")

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default () =>

  <Router>
    <Switch>
      {/* This is where facebook/twitter users will land */}
      <Route path="/referred/:slug" component={Referred}/> 
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>


