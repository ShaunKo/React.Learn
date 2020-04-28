import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Information from "./Information";
import About from "./About.js";
import Banner from "./Banner.js";
import Footer from './Footer.js';
const RouterContainer = () => {
  return (
    <Router>
        <Banner />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
    </Router>
  );
};

export default RouterContainer;