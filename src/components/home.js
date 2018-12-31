import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <p>Home page</p>
        <Link to="/app">
          <button>Go To App</button>
        </Link>
      </div>
    );
  }
}

export default Home;
