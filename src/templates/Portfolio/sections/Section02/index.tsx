import { Icon } from "@iconify/react/dist/iconify.js"
import * as S from "./styles"
import { useContext, useEffect, useState } from "react"
import { experiences } from "@/settings/experiences"
import { ToastContext } from "@/contexts/ToastContext"
import Translate from "@/components/Translate"

import calculateExperiencesToView from "./utils/calculateExperiencesToView"
import Experience from "./components/Experience"


const ButtonFavorite = () => {
  const [favorite, setFavorite] = useState(false)
  const { activeToast } = useContext(ToastContext)

  useEffect(() => {
    const favoriteStorage = (localStorage.getItem("favorite") || "false") === "true"
    setFavorite(favoriteStorage)
  }, [])
  const toggleFavorite = () => {
    setFavorite(prev => {
      const state = !prev
      if (state) {
        activeToast("success", <><Icon icon="mdi:heart" />Obrigado pelo apoio!</>);
      }

      localStorage.setItem("favorite", String(state))
      return state
    })
  }
  return (
    <S.ButtonFavorite onClick={toggleFavorite} favorite={favorite}>
      {favorite ? <Icon className="icon" icon="mdi:heart" /> : <Icon className="icon" icon="mdi:heart-outline" />}
    </S.ButtonFavorite>
  )
}



export default function Section02() {

  return (
    <S.Section02>
      <div className="content">
        <div className="favorite">
          <ButtonFavorite />
          <p><Translate>Se você está gostando do meu portfólio <br />deixe seu apoio aqui!</Translate></p>
        </div>
        <div className="experiences">
          <div className="rectangle top">
            <h4><Translate>Empresas</Translate></h4>
          </div>
          <div className="grid">
            {
              calculateExperiencesToView(experiences, "company").map((experience, index) => (
                <Experience
                  key={experience ? experience.id : `empty-experience-${index}`}
                  experience={experience}
                />
              ))
            }
          </div>
          <div className="rectangle">
            <h4>Freelancer</h4>
          </div>
          <div className="grid last">
            {
              calculateExperiencesToView(experiences, "freelancer").map((experience, index) => (
                <Experience
                  key={experience ? experience.id : `empty-experience-${index}`}
                  experience={experience}
                />
              ))
            }
          </div>
        </div>
      </div>
    </S.Section02>
  )
}