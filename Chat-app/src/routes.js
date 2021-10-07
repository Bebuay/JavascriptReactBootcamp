import React from "react";
import {
    HashRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Detail from "./pages/Detail";

export default function Routes() {
    //We redirect first chat page but in chat page user value is empty for these reason page is redirect to login first
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/chat" />
                </Route>
                <Route  path="/login">
                    <Login />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route path="/user/:id/details">
                    <Detail />
                </Route>
            </Switch>
        </Router>
    )
}