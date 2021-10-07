import React from "react";
import LeftSide from "../components/Chat/LeftSide";
import useTheme from "../hooks/theme";
import useLogin from "../hooks/useLogin";
import { useHistory } from "react-router-dom";


function Detail() {
  const { theme } = useTheme();
  const { selectedUser } = useLogin();
  let history = useHistory();

  const exitToChat =()=> {
    history.push("/chat");
  }

    return (
      <>
        <LeftSide />
        <div className={`details-container-${theme}`}>
          <button className={`exit-button-${theme}`} onClick={exitToChat}>X</button>
          <div className={`detail-image-${theme}`}></div>
          <div className={`detail-name-${theme}`} >{`${selectedUser.first_name} ${selectedUser.last_name}`}</div>
          <div className={`offline-time-${theme}`}>Last seen 2 hours ago</div>
          <div className={`contact-container-${theme}`}>
            <div className={`message-container-${theme}`}>
              <p>💬</p>
              <p>Message</p>
            </div>
            <div className={`message-container-${theme}`}>
              <p>📞</p>
              <p>Call</p>
            </div>
            <div className={`message-container-${theme}`}>
              <p>🎥</p>
              <p>Video</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Detail;