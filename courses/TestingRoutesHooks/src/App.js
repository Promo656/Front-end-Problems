import React from "react";
import {Route, Switch} from "react-router-dom";
import {NewPersonPage} from "courses/TestingRoutesHooks/src/NewPersonPage";
import {HomePage} from "courses/TestingRoutesHooks/src/HomePage";

export function App() {
    return (
        <Switch>
            <Route path="/newperson">
                <NewPersonPage/>
            </Route>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="*">
                <p>Oops, page not found!</p>
            </Route>
        </Switch>
    );
}
