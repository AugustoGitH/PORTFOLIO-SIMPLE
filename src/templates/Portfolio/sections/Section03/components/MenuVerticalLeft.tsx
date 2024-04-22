
import { settingPages } from "@/settings/pages"
import * as S from "../styles"
import Translate from "@/components/Translate"

interface MenuVerticalLeftProps {
  current: number,
  onSelectPage: (value: string) => void
}
export default function MenuVerticalLeft({ current, onSelectPage }: MenuVerticalLeftProps) {

  return (
    <S.MenuVerticalLeft>
      <ul>
        {
          settingPages.map(({ label, value }, index) => (
            <li onClick={() => onSelectPage(value)} key={`option-in-menu-left-${value}`} className={index === current ? "current" : ""}>
              <Translate>{label}</Translate>
            </li>
          ))
        }
      </ul>
    </S.MenuVerticalLeft>
  )
}