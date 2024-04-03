import ImageCarousel from "@/components/ImageCarousel"
import Translate from "@/components/Translate"
import projects from "@/settings/projects"
import { Icon } from "@iconify/react/dist/iconify.js"


const MyProjectsPage = () => (
  <>
    <h2 id="my-projects"><Translate>Meus Projetos</Translate></h2>
    <hr />
    {
      projects.map(project => (
        <div id={`${project.name}`} key={`project-name-${project.name}`}>
          <h3 ><code><Translate>{project.title}</Translate></code></h3>
          <p><Translate>{project.description}</Translate></p>
          <ImageCarousel
            images={project.images.map((img, index) => ({
              alt: `${project.name}-${index}`,
              src: img.src,
              type: img.type
            }))}
          />
          <nav>
            {
              project.links.site && (
                <a target="_blank" href={project.links.site}><Icon icon="mdi:web" /><Translate>Visitar</Translate></a>
              )
            }
            {
              project.links.github && (
                <a target="_blank" href={project.links.github}><Icon icon="mdi:github" />Github</a>
              )
            }
            {
              project.links.youtube && (
                <a target="_blank" href={project.links.youtube}><Icon icon="mdi:youtube" />Youtube</a>
              )
            }
          </nav>
          <hr />
        </div>
      ))
    }


  </>
)

export default MyProjectsPage