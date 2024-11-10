import Body from "./Body";
import Header from "./Header";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import "./App.css";
import texts from './text'
import { useContext } from "react";
function App() {
  let themeObj = useContext(ThemeContext);

  // ______hint for assignmet____
  // let language = useContext(ThemeContext);
  // let {helloText} = texts[language] 
  // console.log(themeObj);

  return (
    <ThemeProvider>
      <div className={themeObj.theme == "light" ? "light App" : "dark App"}>
        {/* ... any further components */}
        <Header />
        <Body />
        {/* {helloText} */}
      </div>
    </ThemeProvider>
  );
}

export default App;
