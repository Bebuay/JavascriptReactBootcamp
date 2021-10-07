import React from "react";
import useTheme from "../../hooks/theme";
import useLogin from "../../hooks/useLogin";

function Settings() {
    const { changeTheme,theme } = useTheme();
    const { logout } = useLogin();


    const change = (event) => {
      changeTheme();
      event.preventDefault();
    };

    const logOut = (event) => {
      logout();
      event.preventDefault();
    }

    return (
      <div className={`settings-${theme}`}>
        <form onSubmit={(event) => change(event)} className={`settings-form-${theme}`}>
          <button type="submit" className="theme-change-button">
            <p>&#127769;</p>
          </button>
        </form>
        <form onSubmit={(event) => logOut(event)} className={`settings-form-${theme}`}>
          <button type="submit" className="logout-button">
            <p>&#10006;</p>
          </button>
        </form>
      </div>
    );
}

export default Settings;