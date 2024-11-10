import { createContext, useState } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
  let [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log('toggle theme is called, theme:', theme)
    setTheme((prevTheme) => 
      prevTheme == "light" ? "dark" : "light"
    );
  };
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
};

export {ThemeProvider, ThemeContext};
