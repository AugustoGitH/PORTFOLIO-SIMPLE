import { socialLinks } from "@/settings/socialLinks"
import * as S from "../styles"
import ToggleLang from "./ToggleLang"
import ToggleTheme from "./ToggleTheme"
import { useContext, useEffect } from "react"
import { PageContext } from "@/contexts/PageContext"
import scrollToElementById from "@/helpers/scrollToElementById"

interface MenuVerticalProps {
  show: boolean,
  onClose?: () => void
}
export default function MenuVertical({ show, onClose = () => { } }: MenuVerticalProps) {
  const { pagesContent, setPage, page } = useContext(PageContext)

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [show])

  const registerNavigation = (index: number, id: string) => ({
    className: page === index ? "current" : "",
    onClick: () => {
      onClose()
      setPage(index)
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
          <span>Aparência</span>
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
            pagesContent.map(([label, href], index) => (
              <li key={`item-nav-${index}-menu-pages`} {...registerNavigation(index, href)}>{label}</li>
            ))
          }
        </ul>
      </div>
    </S.MenuVertical>
  ) : <></>
}