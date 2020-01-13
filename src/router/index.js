import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainContainer from "../containers/MainContainer";

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route path="/">
        <MainContainer />
      </Route>
    </Switch>
  </Router>
);

export default RouterComponent;
