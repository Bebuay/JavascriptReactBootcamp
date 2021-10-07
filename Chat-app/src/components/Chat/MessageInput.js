import React,{useState} from "react";
import useTheme from "../../hooks/theme";
import useLogin from "../../hooks/useLogin";

function MessageInput() {
    const [message, setMessage] = useState("");
    const {theme} = useTheme();
    const { handleSendNewMessage ,selectedUser} = useLogin();

    if (selectedUser) {
    return (
        <div className={`send-message-${theme}`} >
          <input className={`send-input-${theme}`} value={message} onChange={(e) => { setMessage(e.target.value);}} placeHolder="Type" />
          <button className={`send-button-${theme}`}  onClick={() => {
              handleSendNewMessage(message);
              setMessage("");
            }}>SEND</button>
        </div>
      );
          }
          else return null;
}

export default MessageInput;