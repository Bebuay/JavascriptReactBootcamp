import { useContext } from "react";
import { ThemeContext } from "../context/theme";

function useTheme() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return { theme, changeTheme };
}

export default useTheme;