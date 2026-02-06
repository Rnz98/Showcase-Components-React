import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {}
}) 

function ThemeProvider({children}:{children:React.ReactNode}){
    const [theme, setTheme] = useState<"light"|"dark">("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark":"light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme",newTheme);
    };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider ;