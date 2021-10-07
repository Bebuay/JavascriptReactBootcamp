import React ,{useState} from "react";
import SearchInput from "./SearchInput";
import UserList from "./UserList";
import Settings from "./Settings";
import useTheme from "../../hooks/theme";

function LeftSide(){
    const [value, setValue] = useState("");
    const { theme } = useTheme();

    const handleOnSearch = (value) => {
      setValue(value);
    };
    return (
    <div className={`left-side-${theme}`}>
        <SearchInput handleOnSearch={handleOnSearch} />
        <UserList value={value}/>
        <Settings />
     </div>
    );
}

export default LeftSide;