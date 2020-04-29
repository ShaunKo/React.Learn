import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Catalog from "./Catalog";
import About from "./About.js";
import Banner from "./Banner.js";
import Footer from './Footer.js';
import Scrollspy from './Scrollspy.js';
const RouterContainer = () => {
  return (
    <Router>
        <Banner />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/catalog" component={Scrollspy} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
    </Router>
  );
};

export default RouterContainer;