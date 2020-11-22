import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./Moduls/Admin/Authorization";
import Header from './Components//Header'
import 'bootstrap/dist/css/bootstrap.min.css';

class AppAdmin extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin/auth" component={Auth} />
        </Switch>
      </Router>
    );
  }
}

export default AppAdmin;
