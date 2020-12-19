import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Content} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
