import { type ReactNode, createContext, useState, useEffect } from "react";

import { type Lang } from "@/settings/translate/types";



interface ITranslateContext {
  lang: Lang,
  handleSelectLang: (lang: Lang) => void
}

interface ITranslateProvider {
  children: ReactNode,
  langDefault?: Lang
}
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const TranslateContext = createContext({} as ITranslateContext)

const modelNavigatorLangs: Record<string, Lang> = {
  "pt-BR": "ptbr",
  "en-US": "en",
  "es-ES": "es"
}

export default function TranslateProvider({ children, langDefault = "ptbr" }: ITranslateProvider): JSX.Element {
  const [langSelect, setLangSelect] = useState(langDefault)


  useEffect(() => {
    setLangSelect(localStorage.getItem('lang') as Lang || modelNavigatorLangs[navigator.language] || langDefault)
  }, [langDefault])

  const handleSelectLang = (lang: Lang): void => {
    localStorage.setItem('lang', lang)
    setLangSelect(lang);
  }



  return (
    <TranslateContext.Provider value={{ lang: langSelect, handleSelectLang }}>
      {children}
    </TranslateContext.Provider>
  )
}