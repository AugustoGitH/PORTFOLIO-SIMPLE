
import { ComponentProps, useState } from "react"
import * as S from "../styles"
import { Icon } from "@iconify/react/dist/iconify.js"


interface FieldToCopyProps extends ComponentProps<"div"> {
  link: string
}
const FieldToCopyLink = ({ link, ...rest }: FieldToCopyProps) => {
  const [copy, setCopy] = useState(false)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopy(true)
        setTimeout(() => {
          setCopy(false)
        }, 3000)
      })
      .catch(err => {
        console.error('Erro ao copiar o texto:', err);
        setCopy(false)
      });
  }

  return (
    <S.FieldToCopyLink {...rest}>
      <div className="field" onClick={handleCopyLink}>
        <Icon className="icon-link" icon="bx bx-link" />
        <span className="link">{link}</span>
        <button className="btn-copy">
          {copy ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </S.FieldToCopyLink>
  )
}

export default FieldToCopyLink