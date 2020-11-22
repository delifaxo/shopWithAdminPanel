import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsFront from "./Moduls/Front/Products";
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

class AppFront extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductsFront} />
        </Switch>
      </Router>
    );
  }
}

export default AppFront;
