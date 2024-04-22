


import * as S from "./styles"
import { useContext, useRef } from "react"

import MenuVerticalLeft from "./components/MenuVerticalLeft"
import MenuVerticalRight from "./components/MenuVerticalRight"
import PageCurrentContent from "./components/PageCurrentContent"

import scrollToElementById from "@/helpers/scrollToElementById"
import { settingPages } from "@/settings/pages"
import { CurrentPageContext } from "@/contexts/CurrentPageContext"



export default function Section03() {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext)

  const PageCurrentContentRef = useRef<HTMLDivElement | null>(null)

  const handleSelectPage = (prevPage: ((page: number) => number) | number, id: string) => {
    const pageIndex = typeof prevPage === "function" ? prevPage(currentPage) : prevPage
    setCurrentPage(pageIndex)

    setTimeout(() => {
      scrollToElementById(id, 100)
    }, 200)
  }



  return (
    <S.Section03>
      <div className="content">
        <MenuVerticalLeft
          current={currentPage}
          onSelectPage={(id) => handleSelectPage(settingPages.findIndex(p => p.value === id), id)}
        />
        <PageCurrentContent
          ref={PageCurrentContentRef}
          current={currentPage}
          onNext={(id) => handleSelectPage(prevPage => prevPage + 1, id)}
          onPrevious={(id) => handleSelectPage(prevPage => prevPage - 1, id)}
        />
        <MenuVerticalRight
          current={currentPage}
          pageCurrentContentRef={PageCurrentContentRef}
        />
      </div>
    </S.Section03>
  )
}