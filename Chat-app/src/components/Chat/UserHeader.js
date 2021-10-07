import React from "react";
import useTheme from "../../hooks/theme";
import useLogin from "../../hooks/useLogin";
import { useHistory } from "react-router-dom";

function UserHeader() {
    const { selectedUser } = useLogin();
    const { theme } = useTheme();
    let history = useHistory();

    if (!selectedUser) {
         return null
    }
    else {
        return (
        <div className={`user-header-container-${theme}`}>
            <div className={`user-image-${theme}`}></div>
            <h4 className={`user-header-name-${theme}`}>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h4>
            <button  className={`detail-button-${theme}`} onClick={() => {
            history.push("/user/" + selectedUser.id + "/details");
        }}>
            ...
            </button>
        </div>
        );
    }
}

export default UserHeader;