import React from "react";
import UserHeader from "./UserHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useTheme from "../../hooks/theme";
import useLogin from "../../hooks/useLogin";
import { Redirect } from "react-router";

function RightSide({clicked,onClickHandler}) {
    const { selectedUser } = useLogin();
    const {theme} = useTheme(); 

    return (
        <div className={`right-side-${theme}`}>
            <UserHeader clicked={clicked} onClickHandler={onClickHandler}/>
            <Messages />
            <MessageInput />
        </div>
    )
}

export default RightSide;