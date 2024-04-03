import Translate from "@/components/Translate"
import { socialLinks } from "@/settings/socialLinks"

const ThanksPage = () => (
  <>
    <h2 id="thanks"><Translate>Agradecimentos</Translate></h2>
    <hr />
    <h3><Translate><span>Muito Obrigado!</span> Você chegou até o final 🚀</Translate></h3>
    <p><Translate>Qualquer dúvida, entre em contato comigo: </Translate><a target="_blank" href={socialLinks.linkedin.href}>Linkedin</a> <Translate>ou</Translate> <a target="_blank" href={socialLinks.whatsapp.href}>Whatsapp</a>.</p>
    <p><Translate>Referências</Translate>: <a target="_blank" href="https://vitejs.dev/">Vite</a></p>
  </>
)

export default ThanksPage