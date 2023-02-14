import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "courses/Quiz/src/HomePage";
import { NewNotePage } from "courses/Quiz/src/NewNotePage";

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/new">
        <NewNotePage />
      </Route>
    </Switch>
  );
}
