// React Imports
import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

// Page Imports
import School from "./Pages/School";

// Page Imports
import Home from "./Pages/Home";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/schools/:id">
        <School />
      </Route>
    </Switch>
  );
};

export default App;
