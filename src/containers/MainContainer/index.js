import "../../rsc/scss/custom.scss";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import UPshowLogo from "../../components/UPshowLogo";
import VenuesContainer from "../VenuesContainer";
import TV from "../../components/tv";
import ClientsContainer from "../clients-container";

function MainContainer() {
  return (
    <div className="main-container">
      <TV>
        <Router>
          <Switch>
            <Route path="/venues">
              <VenuesContainer />
            </Route>
            <Route path="/clients">
              <ClientsContainer />
            </Route>

            <Route path="/">
              <Redirect
                to={{
                  pathname: "/venues"
                }}
              />
            </Route>
          </Switch>
        </Router>
      </TV>
      <UPshowLogo />
    </div>
  );
}

export default MainContainer;
