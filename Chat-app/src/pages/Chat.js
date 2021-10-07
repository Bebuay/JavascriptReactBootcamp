import React from "react";
import LeftSide from "../components/Chat/LeftSide";
import RightSide from "../components/Chat/RightSide";
import useLogin from "../hooks/useLogin";
import { Redirect } from "react-router";
import useTheme from "../hooks/theme";

function Chat() {  
    const { user } = useLogin();
    const { theme } = useTheme();
    
    if (!user) {
            return <Redirect to="/login" />
        }
    else {
        return (   
            <div className={`chat-container-${theme}`}>
                <LeftSide />
                <RightSide />
            </div>
        );
    }
}
export default Chat;