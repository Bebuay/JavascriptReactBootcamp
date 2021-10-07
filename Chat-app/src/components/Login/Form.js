import React from "react";
import UseLogin from "../../hooks/useLogin";
import {v4 as v4} from "uuid";
import { Redirect } from "react-router";
import  useTheme  from "../../hooks/theme";

function Form() {
    //Take Datas From Hooks
    const {login}=UseLogin();
    const {theme} = useTheme();
    
    const submit = (event)=>{
        const user = {
            id: v4(),
            username:event.target.username.value,
            firstName :event.target.firstName.value,
            lastName : event.target.lastName.value,
        };
        login(user);
        <Redirect to="/chat" />
        event.preventDefault();
    }
    return (
        <div className={`login-container-${theme}`}>
            <form id="login-form" onSubmit={(event)=>{
                submit(event);
            }}>
                <h2 className={`login-header-${theme}`}>Login To Your Account</h2>
                <input type="text" className={`username-area-${theme}`} name="username" placeholder="Username" required />
                <input type="text" className={`first-name-area-${theme}`} name="firstName" placeholder="First Name" required />
                <input type="text" className={`last-name-area-${theme}`} name="lastName" placeholder="Last Name" required />
                <input type="submit" className={`submit-btn-${theme}`} name="submit" value="LOGIN" required />
            </form>
        </div>
    )
}

export default Form;