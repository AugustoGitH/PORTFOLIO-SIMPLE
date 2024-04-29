

import { socialLinks } from "@/settings/socialLinks"
import * as S from "./styles"




import MenuVertical from "./components/MenuVertical"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
import ToggleLang from "../ToggleLang"
import ToggleTheme from "../ToggleTheme"

export default function Header() {
  const [showMenuVertical, setShowMenuVertical] = useState(false)
  return (
    <>
      <S.Header>
        <div className="content">
          <a className="title" href={"/portfolio"} title="Voltar para o Início">
            <h1>🚀 Augusto</h1>
          </a>
          <button className="btn-open-menu-vertical" onClick={() => setShowMenuVertical(prev => !prev)}>
            {showMenuVertical ? <Icon icon="material-symbols:close" /> : <Icon icon="gg:menu-right-alt" />}
          </button>
          <div className="navigation">
            <S.VerticalLine />
            <ToggleLang />
            <S.VerticalLine />
            <ToggleTheme />


            <S.VerticalLine />
            <nav className="social">
              {
                Object.entries(socialLinks).map(([, { href, icon, title }], index) => (
                  <a key={`social-link-${index}`} href={href} title={title}>
                    {icon}
                  </a>
                ))
              }

            </nav>
          </div>
        </div>
      </S.Header>
      <MenuVertical show={showMenuVertical} onClose={() => setShowMenuVertical(false)} />

    </>
  )
}