import { stacks } from "@/settings/stacks"
import * as S from "./styles"
import augustoProfile from "@/assets/imgs/profiles/augusto.webp"
import { socialLinks } from "@/settings/socialLinks"

import curriculumPTBR from "@/assets/curriculuns/curriculo-full-stack.pdf"
import curriculumEN from "@/assets/curriculuns/curriculo-full-stack-en.pdf"
import { Icon } from "@iconify/react/dist/iconify.js"
import useDownloadFile from "@/hooks/useDownloadFile"
import { useContext } from "react"
import { CurrentPageContext } from "@/contexts/CurrentPageContext"
import scrollToElementById from "@/helpers/scrollToElementById"
import Translate from "@/components/Translate"
import { settingPages } from "@/settings/pages"
import { TranslateContext } from "@/contexts/TranslateContext"

export default function Section01() {
  const { downloadFile, isLoading, isDownload } = useDownloadFile()
  const { setCurrentPage } = useContext(CurrentPageContext)
  const { lang } = useContext(TranslateContext)
  const curriculum = lang === "ptbr" ? curriculumPTBR : curriculumEN

  const onRedirectProjects = () => {
    const id = "projects"
    setCurrentPage(settingPages.findIndex(({ value }) => value as string === id))
    setTimeout(() => {
      scrollToElementById(id, 100)
    }, 200)
  }

  const onInit = () => {
    const id = settingPages.find(({ value }) => value === "about-me")?.value
    if (!id) return
    setCurrentPage(0)
    setTimeout(() => {
      scrollToElementById(id, 100)
    }, 200)
  }

  return (
    <S.Section01>

      <div className="content">
        <div className="apresentation">
          <div className="text">
            <h1><span className="mark">Augusto</span><br /><span className="word-parse"><Translate>Dev Web</Translate></span> <span className="word-inter"><Translate>Desenvolvedor Web</Translate></span> Full-Stack</h1>
            <p><Translate>Construindo o Futuro Digital com Excelência e Inovação em Desenvolvimento Web Full-Stack</Translate></p>
          </div>
          <div className="image">
            <div className="erase">
              <img width={400} height={400} src={augustoProfile} />
            </div>
          </div>
        </div>
        <nav className="navigation">
          <a className="third" onClick={onInit}><Translate>Começar</Translate></a>
          <a onClick={onRedirectProjects}><Translate>Meus Projetos 🪩</Translate></a>
          <a target="_blank" href={socialLinks.github.href}><Translate>Visitar meu Github</Translate></a>
          <a className="third" onClick={() => downloadFile(curriculum)}>{isLoading ? <Icon className="icon" icon="line-md:loading-twotone-loop" /> : (<Translate>{isDownload ? "CV Baixado 😁" : "Baixar CV 👋"}</Translate>)}</a>
        </nav>
        <div className="stacks">
          {
            stacks.map((stack, index) => (
              <div key={`stack-card-${index}`} className="card">
                <div className="square-icon">
                  {stack.emoji}
                </div>
                <h2><Translate>{stack.title}</Translate></h2>
                <p><Translate>{stack.description}</Translate></p>
              </div>
            ))
          }
        </div>
      </div>
    </S.Section01>
  )
}