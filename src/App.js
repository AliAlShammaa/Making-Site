import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import ItemComp from "./Components/ItemsComp";
import Product from "./Components/product";
import { Login } from "./Components/login";
import ProductWindow from "./Components/productsWindow";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/about/:id" component={ItemComp} />
        <Route path="/product/" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/productCard/:id" component={ProductWindow} />
      </Switch>
    </Router>
  );
}

export default App;

{
  /* <CounterExample /> */
}

{
  /* <div class="row">
        <div class="col-lg-3">.col-md-3</div>
        <div class="col-md-3">.col-sm-3</div>
        <div class="col-md-3">.col-sm-3</div>
        <div class="col-md-3">.col-sm-3</div>
      </div> */
}
