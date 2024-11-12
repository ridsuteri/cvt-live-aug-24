import "./App.css";
import Content from "./Content";
import { LanguageProvider } from "./LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

function App() {
  return (
    <LanguageProvider>
      <LanguageSwitch />
      <Content />
    </LanguageProvider>
  );
}

export default App;
