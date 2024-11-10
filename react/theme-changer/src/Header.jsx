import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Header = () => {
  let themeObj  = useContext(ThemeContext);
  return (
    <>
      <div className={themeObj.theme == "light" ? "light Header" : "dark Header"}>
        Header <br />
        <button onClick={themeObj.toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
};

export default Header;
