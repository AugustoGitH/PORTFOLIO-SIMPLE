import portfolioAtualImgs from "@/assets/imgs/projects/portfolio-atual";
import onlinksImgs from "@/assets/imgs/projects/onlinks";
import techlegionImgs from "@/assets/imgs/projects/tech-legion";
import portfolioCMSImgs from "@/assets/imgs/projects/portfolio-cms";
import { v4 as uuid } from "uuid"
import { ReactNode } from "react";

interface Project {
  id: string,
  title: string;
  description: string | ReactNode;
  images: { src: string, type: "image" | "video" }[];
  links: {
    github?: string;
    site?: string;
    youtube?: string;
  };
}
const tratedMediasProject = (images: string[], video?: string) => {
  return [...[video ? { src: video, type: "video" } : []], ...images.map(src => ({ src, type: "image" }))] as { src: string, type: "image" | "video" }[]
}
const projects: Project[] = [
  {
    id: uuid(),
    title: "Portfólio Atual",
    description: <>
      🌟 <strong>Meu portfólio atual</strong> é uma versão simplificada do anterior. Antes, precisava de hospedagem de servidor e banco de dados.
      <br /><br />
      💡 <strong>No portfólio atual</strong>, optei por utilizar <code>React</code>, <code>TypeScript</code> e <code>styled-components</code>.
    </>,

    images: tratedMediasProject(portfolioAtualImgs, "/videos/portfolio-atual.mp4"),
    links: {
      github: "https://github.com/AugustoGitH/PORTFOLIO-SIMPLE",
      site: "https://augustowestphal.site/",
    },
  },
  {
    id: uuid(),
    title: "Onlinks - Página de Links",
    description: <>
      🚀 <strong>No Onlinks: Explorando Múltiplos Perfis em uma Página</strong>
      <br /><br />
      Simplificando o compartilhamento online sem várias contas
      Agregação de diversos aspectos em uma única página
      <br /><br />
      🔧 <strong>Tecnologias Utilizadas:</strong>
      <br /><br />
      <br /><strong>Frontend:</strong>{" "}<br />
      <code>Next.js</code> e <code>TypeScript</code> para agilidade e eficiência
      Cacheamento para melhorar a experiência do usuário
      <br />
      <strong>Backend:</strong>{" "}<br />
      <code>Express.js</code> para o desenvolvimento do servidor
      {" "}<code>TypeScript</code> para maior robustez e manutenibilidade
      {" "}<code>MongoDB</code> para armazenamento de dados
      <br /><br />
      ✂️ <strong>Encurtador de Links:</strong>
      <br /><br />
      Facilita o compartilhamento de perfis e conteúdos
      Desenvolvido com <code>Express.js</code>, <code>TypeScript</code> e <code>MongoDB</code> para robustez e escalabilidade.

    </>,

    images: tratedMediasProject(onlinksImgs, "/videos/onlinks.mp4"),
    links: {
      github: "https://github.com/techlegionbr/onlinks-frontend",

    },
  },
  {
    id: uuid(),
    title: "TechLegion - Site Institucional",
    description: <>
      🛠️ <strong>Desenvolvimento do Site da Tech Legion</strong>
      <br /><br />
      ℹ️ <strong>Seções Informativas:</strong>
      <br /><br />
      Criação de diversas seções ricas em informações.
      Integração de imagens e vídeos para uma experiência envolvente.
      <br /><br />
      📝 <strong>Blog Dinâmico:</strong>
      <br /><br />
      Implementação de um blog dinâmico.
      Painel administrativo para gerenciamento de redatores e administradores.
      <br /><br />
      🖥️ <strong>Tecnologias Utilizadas:</strong>
      <br /><br />
      <strong>Frontend:</strong><br />
      <code>Next.js</code> e <code>TypeScript</code> para agilidade e eficiência.
      <br /><strong>Backend:</strong><br />
      <code>Express.js</code>, <code>TypeScript</code> e <code>MongoDB</code> para o banco de dados.
      <br /><br />
      💡 <strong>Destaque:</strong>
      <br /><br />
      Sistema robusto e escalável para edição e criação de postagens.
    </>,

    images: tratedMediasProject(techlegionImgs, "/videos/tech-legion.mp4"),
    links: {
      github: "https://github.com/techlegionbr/site-techlegion--frontend",
      site: "http://techlegion.com.br/",
    },
  },
  {
    id: uuid(),
    title: "Portfólio CMS",
    description: <>
      🛠️ Desenvolvimento do Meu Portfólio Estilo CMS
      <br /><br />
      📝 <strong>Facilitando a Gestão de Projetos:</strong>
      <br /><br />
      Criado com o intuito de simplificar a criação e gestão dos meus projetos.
      Painel com sistema de visualização e atribuição de repositórios do GitHub aos projetos do portfólio.
      <br /><br />
      🖼️ <strong>Gestão de Imagens:</strong>
      <br /><br />
      Implementação de um carrossel de visualização para facilitar a exibição dos projetos.
      Gerenciamento intuitivo das imagens relacionadas aos projetos.
      <br /><br />
      🔧 <strong>Tecnologias Utilizadas:</strong>
      <br /><br />
      <strong>Frontend:</strong><br />
      <code>React.js</code> e <code>TypeScript</code> para uma experiência de usuário dinâmica e responsiva.
      <br /><strong>Backend:</strong><br />
      <code>Express.js</code>, <code>TypeScript</code> e <code>MongoDB</code> para garantir a robustez e escalabilidade do sistema.
      <br /><br />
      💡 <strong>Destaque:</strong>
      <br /><br />
      Abordagem eficiente para simplificar a criação e atualização do portfólio, facilitando a minha gestão de projetos.

    </>,

    images: tratedMediasProject(portfolioCMSImgs, "/videos/portfolio-cms.mp4"),
    links: {
      github: "https://github.com/AugustoGitH/PORTFOLIO-5.1--DEV",

    },
  },
];

export default projects;
