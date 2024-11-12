import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import availableLang from './mockData/availableLang.json'
import translations from './mockData/translations.json'

const Content = () => {
  let {lang} = useContext(LanguageContext)
  let langName = availableLang.filter((language)=>language.code == lang)

  return (
    <div>
        <h4>{translations[lang].currentLang}: {langName[0].label} </h4>
        <h2>{translations[lang].helloText}</h2>
        <h6>{translations[lang].description}</h6>
    </div>
  )
}

export default Content