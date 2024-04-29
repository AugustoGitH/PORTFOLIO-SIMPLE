import { socialLinks } from "@/settings/socialLinks"
import * as S from "../styles"

import { useContext, useEffect } from "react"
import { CurrentPageContext } from "@/contexts/CurrentPageContext"
import scrollToElementById from "@/helpers/scrollToElementById"
import { settingPages } from "@/settings/pages"
import Translate from "@/components/Translate"
import ToggleLang from "@/components/ToggleLang"
import ToggleTheme from "@/components/ToggleTheme"

interface MenuVerticalProps {
  show: boolean,
  onClose?: () => void
}
export default function MenuVertical({ show, onClose = () => { } }: MenuVerticalProps) {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext)

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [show])

  const registerNavigation = (index: number, id: string) => ({
    className: currentPage === index ? "current" : "",
    onClick: () => {
      onClose()
      setCurrentPage(index)
      setTimeout(() => {
        scrollToElementById(id, 100)
      }, 200)
    }
  })
  return show ? (
    <S.MenuVertical>
      <div className="navigation">

        <ToggleLang mobile />
        <div className="appearance">
          <span><Translate>Aparência</Translate></span>
          <ToggleTheme />
        </div>
        <nav className="social">
          {
            Object.entries(socialLinks).map(([, { href, icon, title }], index) => (
              <a key={`social-link-${index}`} href={href} title={title}>
                {icon}
              </a>
            ))
          }
        </nav>
        <ul className="menu-pages">
          {
            settingPages.map(({ label, value }, index) => (
              <li key={`item-nav-${index}-menu-pages`} {...registerNavigation(index, value)}>
                <Translate>{label}</Translate>
              </li>
            ))
          }

        </ul>
      </div>
    </S.MenuVertical>
  ) : <></>
}