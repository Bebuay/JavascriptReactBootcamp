import { useContext } from "react";
import { UserContext } from "../context/signup";

export default function useLogin() {
    const {user ,userList,selectedUser,setSelectedUser, login,logout,handleSendNewMessage} = useContext(UserContext);
    return {user,userList,selectedUser,setSelectedUser,login,logout,handleSendNewMessage};
}