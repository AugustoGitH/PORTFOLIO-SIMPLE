
import { Icon } from "@iconify/react/dist/iconify.js"
import * as S from "./styles"

import { ReactNode } from "react"
import Translate from "../Translate"
import normalizeString from "@/helpers/normalizeString"
interface IndicationProps {
  name: string,
  profile: {
    src: string,
    alt: string
  }
  auth: {
    href: string,
    label: string
  },
  description: string | ReactNode,
  linkedin: string
}
export default function Indication({ auth, description, linkedin, name, profile }: IndicationProps) {
  return (
    <S.Indication id={`${normalizeString(name, {
      toLowerCase: true,
      replaceSpaces: true

    })}`}>
      <a target="_blank" href={auth.href}><span className="auth"><Translate>{auth.label}</Translate></span></a>
      <img className="profile" alt={profile.alt} src={profile.src} width={100} height={100} />
      <div className="infos">
        <span className="name">{name}<a target="_blank" href={linkedin}><Icon className="icon" icon="mdi:linkedin" /></a></span>
        <span className="description">
          <i>"<Translate>{description}</Translate>"</i>
        </span>
      </div>
    </S.Indication>
  )
}