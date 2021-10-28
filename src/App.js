import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Carts from "./components/Cart";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
        <Route path="/cart" component={Carts}>
          <Carts />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
