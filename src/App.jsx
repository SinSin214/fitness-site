import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Calculator from "./components/Features";
import Meal from "./components/about";
import Exercise from "./components/services";
import Knowledge from "./components/gallery";
import JsonData from "./data/data.json";

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <Router>
        <div>
          <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/calculator" className="page-scroll">
                      Calory Calculator
                    </Link>
                  </li>
                  <li>
                    <Link to="/meal" className="page-scroll">
                      Meal Planer
                    </Link>
                  </li>
                  <li>
                    <Link to="/exercise" className="page-scroll">
                      Exercises
                    </Link>
                  </li>
                  <li>
                    <Link to="/knowledge" className="page-scroll">
                      Knowledge
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Header data={this.state.landingPageData.Header} />
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/meal">
              <Meal />
            </Route>
            <Route path="/exercise">
              <Exercise />
            </Route>
            <Route path="/knowledge">
              <Knowledge />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
