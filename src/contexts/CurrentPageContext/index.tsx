
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import scrollToElementById from "@/helpers/scrollToElementById";
import { settingPages } from "@/settings/pages";
interface CurrentPageProviderProps {
  children: ReactNode
}

interface CurrentPageContextProps {
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,

}

export const CurrentPageContext = createContext({} as CurrentPageContextProps)




export default function CurrentPageProvider({ children }: CurrentPageProviderProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const locationHast = location.hash.replace("#", "")
    const findIndex = settingPages.findIndex(({ value }) => value === locationHast)
    if (findIndex !== -1) {
      setCurrentPage(findIndex)
      setTimeout(() => {
        scrollToElementById(locationHast, 200)
      }, 200)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash])


  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}

    </CurrentPageContext.Provider>
  )
}