
import { Experience as IExperience } from "@/settings/experiences/types"
import * as S from "../styles"
import Translate from "@/components/Translate"
import { Icon } from "@iconify/react/dist/iconify.js"

interface ExperienceProps {
  experience: IExperience | null
}
export default function Experience({ experience }: ExperienceProps) {
  return (
    <S.Experience isEmpty={!experience}>
      {
        experience ? (
          <>
            <span className="sup"><Translate>{experience.office}</Translate></span>
            <h1><Translate>{experience.company}</Translate></h1>
            <span className="sub">{experience.date}</span>
          </>
        ) : <Icon className="icon" icon="solar:box-bold" />
      }
    </S.Experience>
  )
}