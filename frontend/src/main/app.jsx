import React from "react";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Routes from "./routes";
import Menu from "../template/menu";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Menu />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
