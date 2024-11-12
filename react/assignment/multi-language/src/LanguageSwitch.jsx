import React, { useContext } from "react";
import availableLanguages from "./mockData/availableLang.json";
import { LanguageContext } from "./LanguageContext";
// import lang from './mockData/lang'
const LanguageSwitch = () => {
  let { lang, changeLanguage } = useContext(LanguageContext);
  return (
    <div>
      <select
      value={lang}
        onChange={(e) => {
          changeLanguage(e.target.value);
        }}
      >
        {availableLanguages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitch;
