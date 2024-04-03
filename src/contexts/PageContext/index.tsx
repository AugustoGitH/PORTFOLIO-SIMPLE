import Translate from "@/components/Translate";
import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";
import IndicationsPage from "./pages/IndicationsPage";
import MyProjectsPage from "./pages/MyProjectsPage";
import ThanksPage from "./pages/ThanksPage";
import * as S from "./styles"
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import scrollToElementById from "@/helpers/scrollToElementById";
interface PageProviderProps {
  children: ReactNode
}

interface PageContextProps {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  PageContent: () => ReactNode,
  pagesContent: [string, string, JSX.Element][]
}

export const PageContext = createContext({} as PageContextProps)




export default function PageProvider({ children }: PageProviderProps) {
  const [page, setPage] = useState(0)
  const location = useLocation()
  const pagesContent: [string, string, JSX.Element][] = [
    ["Sobre Mim", "about-me", AboutMePage()],
    ["Meus Projetos", "my-projects", MyProjectsPage()],
    ["Entre em Contato", "contact-me", ContactMePage()],
    ["Indicações", "indications", IndicationsPage()],
    ["Agradecimentos", "thanks", ThanksPage()]
  ]

  useEffect(() => {
    const locationHast = location.hash.replace("#", "")
    const findIndex = pagesContent.findIndex(([, id]) => id === locationHast)
    if (findIndex !== -1) {
      setPage(findIndex)
      setTimeout(() => {
        scrollToElementById(locationHast, 200)
      }, 200)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash])

  const PageContent = () => {
    return (
      <S.PageContent>
        {pagesContent[page][2]}
        <div className="controller-navigation" style={{ justifyContent: page > 0 && !pagesContent[page + 1] ? "flex-start" : "flex-end" }}>
          {
            page > 0 && (
              <button onClick={() => setPage(prev => prev - 1)}>
                <span><Translate>Página Anterior</Translate></span>
                <span><Translate>{pagesContent[page - 1][0]}</Translate></span>
              </button>
            )
          }
          {
            pagesContent[page + 1] && (
              <button onClick={() => setPage(prev => prev + 1)}>
                <span><Translate>Próxima Página</Translate></span>
                <span><Translate>{pagesContent[page + 1][0]}</Translate></span>
              </button>
            )
          }
        </div>
      </S.PageContent>
    )
  }
  return (
    <PageContext.Provider value={{ page, setPage, PageContent, pagesContent }}>
      {children}

    </PageContext.Provider>
  )
}