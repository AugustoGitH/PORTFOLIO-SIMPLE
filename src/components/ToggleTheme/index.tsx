import { useContext } from "react"
import * as S from "./styles"
import { Icon } from "@iconify/react"
import { ThemeContext } from "@/contexts/ThemeContext"

export default function ToggleTheme() {
  const { toggleThemeMode, themeMode } = useContext(ThemeContext)

  return (
    <S.ToggleTheme>
      <div className={`toggle-theme`} onClick={toggleThemeMode}>
        <div className={`toggle ${themeMode}`}>
          {
            themeMode === "dark" ? <Icon className="icon" icon="ph:moon-fill" /> : <Icon className="icon" icon="ph:sun-fill" />
          }
        </div>
      </div>
    </S.ToggleTheme>
  )
}