import { createContext, useState } from "react";

const LanguageContext =  createContext({});

const LanguageProvider = ({children})=>{

    let [lang, setLanguage] = useState('hi');

    const changeLanguage = (language)=>{
        console.log('current language', lang);
        console.log('switching to: ', language)
        setLanguage(language);
    }

    return (
        <LanguageContext.Provider value={{lang, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext, LanguageProvider};