import React from "react";
import logo from "./logo.svg";
import EjemploHome from "./ejemplos/home";
import Layout from "./layout/layout";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={EjemploHome} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
