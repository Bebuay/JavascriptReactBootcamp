import React, {useState,useEffect} from 'react';
import Routes from "./routes";
import "./App.css";
import {UserContext} from "./context/signup";
import { ThemeContext } from './context/theme';
import mockUserList from "./mock-users.json";

export default function App() {
    //UserContext
  const [user, setUser] = useState();
  const [selectedUser, setSelectedUser] = useState(mockUserList.users[0]);
  const [userList, setUserList] = useState(mockUserList.users); // define users from json
  console.log(mockUserList.users);
    // ThemeContext
  const [theme, setTheme] = useState("light");

  const login = (user) => {
    setUser(user);
    localStorage.setItem("username", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };
 
  const handleSetSelectedUser = (userId) => {
    const user = userList.find((u) => u.id === userId);
    if (user) setSelectedUser(user);
  };

  const handleSendNewMessage = (messageText) => {
    const newSelectedUser = {
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: Math.random(),
          text: messageText,
          sender: user.id,
        },
      ],
    };

    setSelectedUser(newSelectedUser);
    const newUserList = userList.map((e) => {
      if (e.id === selectedUser.id) return newSelectedUser;
      else return e;
    });

    setUserList(newUserList);
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const loadTheme = () => {
    let theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
    else setTheme("light");
  };

  const loadUser = () => {
    let user = localStorage.getItem("username");
    if (user) setUser(user);
    else setTheme(null);
  };

  useEffect(() => {
    if (theme) localStorage.setItem("theme", theme);
  }, [theme]);



  useEffect(() => {
    loadUser();
    loadTheme();
  }, []);

  return (
    <UserContext.Provider value={{ user,
    userList:userList,
    selectedUser,
    setSelectedUser:handleSetSelectedUser,
    login,
    logout,
    handleSendNewMessage, }}>
      <ThemeContext.Provider value={{ theme, changeTheme}}>
        <div className={`theme-container-${theme}`} theme={theme}>
          <Routes />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}


