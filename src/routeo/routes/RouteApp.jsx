import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoterNavbar from "../components/RoterNavbar";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const RouteApp = () => {
  return (
    <Router>
      <RoterNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default RouteApp;
