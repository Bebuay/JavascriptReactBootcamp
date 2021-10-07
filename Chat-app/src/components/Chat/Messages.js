import React from "react";
import useTheme from "../../hooks/theme";
import useLogin from "../../hooks/useLogin";

function Messages() {
    const {selectedUser ,user} = useLogin();
    const { theme } = useTheme();
  
    return (
        <div className={`messages-container-${theme}`}>
        {selectedUser ? selectedUser.messages.map((message) => {
              return (
                <div className={`message-area-${
                    message.sender === user.id ? "user-me" : ""}-${theme}`}>
                  <div className={`message-text-${theme}`}>{message.text}</div>
                </div>
              );
            }) : <div className={`empty-message-${theme}`}>No Messages To Show  Select Your Chat Page</div>}
        </div>
    );
}

export default Messages;