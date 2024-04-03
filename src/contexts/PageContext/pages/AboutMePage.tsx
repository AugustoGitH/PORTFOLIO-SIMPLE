import useDownloadFile from "@/hooks/useDownloadFile"
import { Icon } from "@iconify/react/dist/iconify.js"
import curriculo from "@/assets/curriculuns/curriculo-full-stack.pdf"
import Translate from "@/components/Translate"
const AboutMePage = () => {
  const { downloadFile, isDownload, isLoading } = useDownloadFile()
  return (

    <>
      <h2 id="about-me"><Translate>Sobre Mim</Translate></h2>
      <hr />
      <p>
        <Translate>
          👨‍💻 Eu sou Augusto Caetano Westphal, um <strong>apaixonado por tecnologia</strong>, atuando como <strong>desenvolvedor full-stack</strong> e <strong>web designer</strong>.<br /><br />
          Minha paixão é criar <strong>soluções digitais impactantes</strong>. Além de projetos como <strong>freelancer</strong>, também me envolvo em <strong>trabalhos voluntários relacionados à tecnologia</strong>.<br /><br />
          Minha jornada é marcada por habilidades no <strong>desenvolvimento web</strong>, <strong>design de interfaces</strong> e <strong>otimização de desempenho</strong>. Sempre em busca de aprimorar minhas habilidades e conhecimentos, estive envolvido em <strong>diversos projetos</strong>.<br /><br />
          Meu objetivo é contribuir como <strong>desenvolvedor</strong> em uma <strong>empresa de tecnologia inovadora</strong>, trazendo minha energia para <strong>projetos estimulantes</strong>. Sou movido pela <strong>proatividade</strong>, com uma aptidão natural para <strong>trabalho em equipe</strong> e uma habilidade notável para <strong>me adaptar com fluidez</strong> a uma variedade de desafios. 🚀💡🌟
        </Translate>
      </p>
      <nav>
        <a onClick={() => downloadFile(curriculo)}>
          <Icon icon="ph:read-cv-logo-fill" /> {isLoading ? <Icon className="icon" icon="line-md:loading-twotone-loop" /> : (<Translate>{isDownload ? "CV Baixado" : "Baixar meu CV"}</Translate>)}
        </a>
        <a>
          <Icon icon="mdi:linkedin" /><Translate>Meu Linkedin</Translate>
        </a>
        <a>
          <Icon icon="ic:baseline-email" /><Translate>Meu Email</Translate>
        </a>
      </nav>
      <hr />
    </>
  )
}

export default AboutMePage