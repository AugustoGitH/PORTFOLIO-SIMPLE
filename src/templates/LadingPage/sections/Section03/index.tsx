


import * as S from "./styles"
import { useCallback, useContext, useEffect, useState } from "react"
import { PageContext } from "@/contexts/PageContext"
import scrollToElementById from "@/helpers/scrollToElementById"
import Translate from "@/components/Translate"




const labelSections = {
  "about-me": "Sobre Mim",
  "contact-me": "Entre em Contato",
  "indications": "Indicações",
  "my-projects": "Meus Projetos",
  "thanks": "Agradecimentos",
  "codequiz": "CodeQuiz",
  "leonardo": "Leonardo",
  "emanuel": "Emanuel",
  "camilo-italo": "Camilo Italo",
  "samir": "Samir",
  "warllei": "Warllei"
}


const extractIds = (element: JSX.Element) => {
  const childrens: JSX.Element[] = Array.isArray(element.props.children) ? element.props.children : [element.props.children]
  return childrens.flat().map(ch => ch.props.id).filter(Boolean) as unknown as string[]
}


export default function Section03() {
  const { pagesContent, page, setPage, PageContent } = useContext(PageContext)

  const [sections, setSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setSections(
      Object.fromEntries(
        extractIds(pagesContent[page][2] as unknown as JSX.Element).map(id => [id, false])
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const detectVisibleSection = useCallback(() => {
    Object.entries(sections).forEach(([id]) => {
      const sectionDOM = document.getElementById(id)
      const rect = sectionDOM?.getBoundingClientRect()
      if (!rect) return
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setSections(prevSections => ({
          ...Object.fromEntries(Object.entries(prevSections).map(([id]) => [id, false])),
          [id]: true
        }))
      }
    })
  }, [sections])

  useEffect(() => {
    window.addEventListener("scroll", detectVisibleSection)
    return () => window.removeEventListener("scroll", detectVisibleSection)
  }, [detectVisibleSection]);




  const registerNavigationMenuLeft = (index: number, id: string) => ({
    className: page === index ? "current" : "",
    onClick: () => {
      setPage(index)
      setTimeout(() => {
        scrollToElementById(id, 100)
      }, 200)
    }
  })



  return (
    <S.Section03>

      <div className="content">

        <div className="menu-vertical-left">
          <ul>
            {
              pagesContent.map(([label, href], index) => (
                <li key={`item-nav-${index}-menu-vertical-left`} {...registerNavigationMenuLeft(index, href)}>
                  <Translate>{label}</Translate>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="page-content">
          <PageContent />
        </div>
        <div className="menu-vertical-right">
          <ul>
            {
              Object.entries(sections).map(([id, current], index) => (
                <li key={`item-nav-${index}-menu-vertical-right`} className={index === 0 ? "primary" : current ? "current" : ""}>
                  <Translate>{(labelSections as Record<string, string>)[id] ?? id}</Translate>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </S.Section03>
  )
}