import ImageCarousel from "@/components/ImageCarousel"
import Translate from "@/components/Translate"
import normalizeString from "@/helpers/normalizeString"
import projects from "@/settings/projects"
import { Icon } from "@iconify/react/dist/iconify.js"

interface ProjectsPageProps {
  name: string
}
const ProjectsPage = ({ name }: ProjectsPageProps) => (
  <>
    <h2 id={name}><Translate>Meus Projetos</Translate></h2>
    {
      projects.map(project => (
        <div key={project.id}>
          <hr />
          <h3
            id={`${normalizeString(project.title, {
              replaceSpaces: true,
              toLowerCase: true
            })}`}><code><Translate>{project.title}</Translate></code></h3>
          <p><Translate>{project.description}</Translate></p>
          <ImageCarousel
            images={project.images.map((img, index) => ({
              alt: project.title,
              src: img.src,
              type: img.type,
              id: `${img.type}-${index}-${project.id}`
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
                <a target="_blank" href={project.links.github}><Icon icon="mdi:github" />Repositório</a>
              )
            }
            {
              project.links.youtube && (
                <a target="_blank" href={project.links.youtube}><Icon icon="mdi:youtube" />Youtube</a>
              )
            }
          </nav>

        </div>
      ))
    }


  </>
)

export default ProjectsPage