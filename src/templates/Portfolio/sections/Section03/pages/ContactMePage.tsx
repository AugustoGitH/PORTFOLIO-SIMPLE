import useDownloadFile from "@/hooks/useDownloadFile"
import { Icon } from "@iconify/react/dist/iconify.js"
import curriculumPTBR from "@/assets/curriculuns/curriculo-full-stack.pdf"
import curriculumEN from "@/assets/curriculuns/curriculo-full-stack-en.pdf"
import Translate from "@/components/Translate"
import { TranslateContext } from "@/contexts/TranslateContext"
import { useContext } from "react"
interface ContactMePageProps {
  name: string
}
const ContactMePage = ({ name }: ContactMePageProps) => {
  const { downloadFile, isDownload, isLoading } = useDownloadFile()
  const { lang } = useContext(TranslateContext)
  const curriculum = lang === "ptbr" ? curriculumPTBR : curriculumEN
  return (
    <>
      <h2 id={name}><Translate>Entre em Contato</Translate></h2>
      <hr />
      <p>
        <Translate>
          👋 Olá futuro cliente ou empresa!<br /><br />
          Sou um desenvolvedor web full-stack experiente e pronto para transformar suas ideias em realidade no mundo digital. Se você está buscando por alguém que possa ajudar a criar ou dar um upgrade no seu site ou aplicativo, você acabou de encontrar. Não hesite em entrar em contato comigo, estou ansioso para discutir como posso ajudar a sua empresa a alcançar novos patamares digitais com minhas habilidades e criatividade. 😊<br /><br />
          Vamos juntos criar algo incrível! 😉✨🚀
        </Translate>
      </p>
      <nav>
        <a><Icon icon="ic:baseline-whatsapp" /><Translate>Envie uma Mensagem</Translate></a>
        <a><Icon icon="ic:baseline-email" /><Translate>Envie um Email</Translate></a>
        <a onClick={() => downloadFile(curriculum)}> <Icon icon="ph:read-cv-logo-fill" /> {isLoading ? <Icon className="icon" icon="line-md:loading-twotone-loop" /> : (<Translate>{isDownload ? "CV Baixado" : "Baixar meu CV"}</Translate>)}</a>
      </nav>
    </>
  )
}

export default ContactMePage