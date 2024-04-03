import { ComponentProps, useContext, useState } from "react"
import * as S from "../styles"
import { Icon } from "@iconify/react"
import { TranslateContext } from "@/contexts/TranslateContext"
import { Lang } from "@/settings/translate/types"

interface ToggleLangProps {
  mobile?: boolean
}


export default function ToggleLang({ mobile = false }: ToggleLangProps) {
  const [showMenu, setShowMenu] = useState(false)
  const { handleSelectLang, lang } = useContext(TranslateContext)
  const MenuLangs = ({ ...rest }: ComponentProps<"ul">) => {
    const langsToSelected = (["en", "es", "ptbr"] as Lang[]).filter(l => l !== lang)
    const labelLangs: Record<Lang, string> = {
      en: "English",
      es: "Espanhol",
      ptbr: "Português"
    }
    return (
      <S.MenuLangs {...rest}>
        <li className="selected">{labelLangs[lang]}</li>
        {
          langsToSelected.map(l => (
            <li key={`select-lang-${l}`} onClick={() => handleSelectLang(l)}>{labelLangs[l]}</li>
          ))
        }

      </S.MenuLangs>
    )
  }
  return (
    <>
      <S.ToggleLang
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <button className="btn-toggle-lang">

          <Icon className="icon-lang" icon="mdi:language" />
          {mobile && <span>English</span>}
          <Icon className="icon-arrow" icon={`ri:arrow-${showMenu ? "up" : "down"}-s-line`} />
        </button>
        {
          showMenu && <MenuLangs />
        }
      </S.ToggleLang>


    </>
  )
}