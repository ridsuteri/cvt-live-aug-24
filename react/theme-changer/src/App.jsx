import Body from "./Body";
import Header from "./Header";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light App" : "dark App"}>
      <Header />
      <Body />
    </div>
  );
};

export default App;
