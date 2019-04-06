import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
