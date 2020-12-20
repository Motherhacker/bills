import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import BillList from "./bills/BillList";
import ShowBill from "./bills/ShowBill";
import EditBill from "./bills/EditBill";
import CreateBill from "./bills/CreateBill";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={BillList} />
            <Route path="/add" exact component={CreateBill} />
            <Route path="/bills/:id" exact component={ShowBill} />
            <Route path="/bills/edit/:id" exact component={EditBill} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
