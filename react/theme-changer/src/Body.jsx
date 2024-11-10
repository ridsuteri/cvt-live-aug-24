import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Body = () => {
  let themeObj  = useContext(ThemeContext);
  return (
    <div className={themeObj.theme == "light" ? "light Body" : "dark Body"}>Body</div>
  );
};

export default Body;
