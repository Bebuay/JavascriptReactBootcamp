import React from "react";
import useTheme from "../../hooks/theme";
import useLogin from "../../hooks/useLogin";

function UserList({value}) {
  const { userList ,setSelectedUser } = useLogin();
  const { theme } = useTheme();
  
  const textManagement = (message) => {
    if (message.length > 40) {
      return `${message.slice(0, 40)}...`;
    } 
    else {
      return message
    };
  };

  

  return (
    <div className={`userList-container-${theme}`}>
      {userList.filter((e) => {
          if (value == null) {
            return userList;
          } 
          else if (e.first_name.toLowerCase().includes(value.toLowerCase()) || (e.last_name.toLowerCase().includes(value.toLowerCase())))
          {
            return e;
          }
        }).map((users, index) => {
          return (
            <div key={index} onClick={() => setSelectedUser(users.id)} className={`userList-user-container-${theme}`}>
              <div className={`circle-img-${theme}`}></div>
              <div className={`information-container-${theme}`}>
                <h3 className={`user-name-area-${theme}`}>
                  {`${users.first_name} ${users.last_name}`}
                </h3>
                <p className={`user-text-area-${theme}`}>
                  {textManagement(users.messages[users.messages.length - 1].text)}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default UserList;