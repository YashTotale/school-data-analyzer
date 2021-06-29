// React Imports
import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

// Page Imports
import Home from "./Pages/Home";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
