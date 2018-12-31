import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./home";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/app" component={App} />
        </div>
      </Router>
    );
  }
}

export default Main;
