import React from "react";
import { Redirect } from "react-router-dom";
import Form from "../components/Login/Form";
import UseLogin from "../hooks/useLogin";


export default function Login() {
    const {user}=UseLogin();
    // if user is true access to Chat Messages Page
    if(user) {
        return <Redirect to="/chat" />;
    }
    else {
        return (
            <div id="container">
              <Form />
            </div>
        );
    }
}