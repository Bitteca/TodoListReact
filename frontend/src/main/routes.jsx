import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../todo/todo";
import Todo from "../todo/todo";
import About from "../about/about";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/todos" exact component={Todo} />
    <Route path="/sobre" component={About} />
    <Redirect from='*' to='/todos' />
  </Switch>
);

export default Routes;
