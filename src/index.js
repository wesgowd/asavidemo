import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// core components
import Login from "layouts/login.js";
import Admin from "layouts/Admin.js";

import "assets/css/dashboard.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/panel" component={Admin} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
