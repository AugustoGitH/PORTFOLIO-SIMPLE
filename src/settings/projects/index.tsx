import portfolioAtualImgs from "@/assets/imgs/projects/portfolio-atual";
import onlinksImgs from "@/assets/imgs/projects/onlinks";
import techlegionImgs from "@/assets/imgs/projects/tech-legion";
import portfolioCMSImgs from "@/assets/imgs/projects/portfolio-cms";
import codeQuizImgs from "@/assets/imgs/projects/codequiz";
import lpTradingImgs from "@/assets/imgs/projects/lp-tranding-quantitativo";
import lpDevEcommerceImgs from "@/assets/imgs/projects/lp-dev-ecommerce";
import lpDevSocialMediaImgs from "@/assets/imgs/projects/lp-dev-social-media";
import lpKommoImgs from "@/assets/imgs/projects/lp-kommo";
import ecommerceSportifyImgs from "@/assets/imgs/projects/ecommerce-sportify";
import { v4 as uuid } from "uuid";

import { Project, SimpleProject } from "./types";



const tratedMediasProject = (images: string[], video?: string) => {
  return [
    ...(video ? [{ src: video, type: "video" }] : []),
    ...images.map((src) => ({ src, type: "image" })),
  ] as { src: string; type: "image" | "video" }[];
};

const treatProjectsVisualization = (projects: SimpleProject[]): Project[] => {
  return projects.map((project) => {
    const { media, ...restProject } = project;
    return {
      ...restProject,
      id: uuid(),
      images: tratedMediasProject(media.images, media.video),
    };
  });
};

const simpleProjects: SimpleProject[] = [
  {
    title: "Portfólio Atual",
    description: (
      <>
        🌟 <strong>Meu portfólio atual</strong> é uma versão simplificada do
        anterior. Antes, precisava de hospedagem de servidor e banco de dados.
        <br />
        <br />
        💡 <strong>No portfólio atual</strong>, optei por utilizar{" "}
        <code>React</code>, <code>TypeScript</code> e{" "}
        <code>styled-components</code>.
      </>
    ),
    media: {
      images: portfolioAtualImgs,
      video: "/videos/portfolio-atual.mp4",
    },
    links: {
      github: "https://github.com/AugustoGitH/PORTFOLIO-SIMPLE",
      site: "https://augustowestphal.site/",
    },
  },
  {
    title: "Onlinks - Página de Links",
    description: (
      <>
        🚀{" "}
        <strong>No Onlinks: Explorando Múltiplos Perfis em uma Página</strong>
        <br />
        <br />
        Simplificando o compartilhamento online sem várias contas Agregação de
        diversos aspectos em uma única página
        <br />
        <br />
        🔧 <strong>Tecnologias Utilizadas:</strong>
        <br />
        <br />
        <br />
        <strong>Frontend:</strong> <br />
        <code>Next.js</code> e <code>TypeScript</code> para agilidade e
        eficiência Cacheamento para melhorar a experiência do usuário
        <br />
        <strong>Backend:</strong> <br />
        <code>Express.js</code> para o desenvolvimento do servidor{" "}
        <code>TypeScript</code> para maior robustez e manutenibilidade{" "}
        <code>MongoDB</code> para armazenamento de dados
        <br />
        <br />
        ✂️ <strong>Encurtador de Links:</strong>
        <br />
        <br />
        Facilita o compartilhamento de perfis e conteúdos Desenvolvido com{" "}
        <code>Express.js</code>, <code>TypeScript</code> e <code>MongoDB</code>{" "}
        para robustez e escalabilidade.
      </>
    ),
    media: {
      images: onlinksImgs,
      video: "/videos/onlinks.mp4",
    },
    links: {
      github: "https://github.com/techlegionbr/onlinks-frontend",
    },
  },
  {
    title: "TechLegion - Site Institucional",
    description: (
      <>
        🛠️ <strong>Desenvolvimento do Site da Tech Legion</strong>
        <br />
        <br />
        ℹ️ <strong>Seções Informativas:</strong>
        <br />
        <br />
        Criação de diversas seções ricas em informações. Integração de imagens e
        vídeos para uma experiência envolvente.
        <br />
        <br />
        📝 <strong>Blog Dinâmico:</strong>
        <br />
        <br />
        Implementação de um blog dinâmico. Painel administrativo para
        gerenciamento de redatores e administradores.
        <br />
        <br />
        🖥️ <strong>Tecnologias Utilizadas:</strong>
        <br />
        <br />
        <strong>Frontend:</strong>
        <br />
        <code>Next.js</code> e <code>TypeScript</code> para agilidade e
        eficiência.
        <br />
        <strong>Backend:</strong>
        <br />
        <code>Express.js</code>, <code>TypeScript</code> e <code>MongoDB</code>{" "}
        para o banco de dados.
        <br />
        <br />
        💡 <strong>Destaque:</strong>
        <br />
        <br />
        Sistema robusto e escalável para edição e criação de postagens.
      </>
    ),
    media: {
      images: techlegionImgs,
      video: "/videos/tech-legion.mp4",
    },
    links: {
      github: "https://github.com/techlegionbr/site-techlegion--frontend",
      site: "http://techlegion.com.br/",
    },
  },
  {
    title: "Portfólio CMS",
    description: (
      <>
        🛠️ Desenvolvimento do Meu Portfólio Estilo CMS
        <br />
        <br />
        📝 <strong>Facilitando a Gestão de Projetos:</strong>
        <br />
        <br />
        Criado com o intuito de simplificar a criação e gestão dos meus
        projetos. Painel com sistema de visualização e atribuição de
        repositórios do GitHub aos projetos do portfólio.
        <br />
        <br />
        🖼️ <strong>Gestão de Imagens:</strong>
        <br />
        <br />
        Implementação de um carrossel de visualização para facilitar a exibição
        dos projetos. Gerenciamento intuitivo das imagens relacionadas aos
        projetos.
        <br />
        <br />
        🔧 <strong>Tecnologias Utilizadas:</strong>
        <br />
        <br />
        <strong>Frontend:</strong>
        <br />
        <code>React.js</code> e <code>TypeScript</code> para uma experiência de
        usuário dinâmica e responsiva.
        <br />
        <strong>Backend:</strong>
        <br />
        <code>Express.js</code>, <code>TypeScript</code> e <code>MongoDB</code>{" "}
        para garantir a robustez e escalabilidade do sistema.
        <br />
        <br />
        💡 <strong>Destaque:</strong>
        <br />
        <br />
        Abordagem eficiente para simplificar a criação e atualização do
        portfólio, facilitando a minha gestão de projetos.
      </>
    ),
    media: {
      images: portfolioCMSImgs,
      video: "/videos/portfolio-cms.mp4",
    },
    links: {
      github: "https://github.com/AugustoGitH/PORTFOLIO-5.1--DEV",
    },
  },
  {
    title: "Codequiz",
    description: "fasdfasdfasd fasdfsdfasd fasdf asdf asdf \n\n\n\nfasfasdf",
    links: {
      github: "fasdfsdf",
    },
    media: {
      images: codeQuizImgs,
      video: "/videos/codequiz.mp4",
    },
  },
  {
    title: "Trading Quantitativo - LP",
    description: "fasdfasdfasd fasdfsdfasd fasdf asdf asdf \n\n\n\nfasfasdf",
    links: {
      github: "fasdfsdf",
    },
    media: {
      images: lpTradingImgs,
    },
  },
  {
    title: "Desenv. de E-commerce - LP",
    description: "fasdfasdfasd fasdfsdfasd fasdf asdf asdf \n\n\n\nfasfasdf",
    links: {
      github: "fasdfsdf",
    },
    media: {
      images: lpDevEcommerceImgs,
    },
  },
  {
    title: "Social Media - LP",
    description: "fasdfasdfasd fasdfsdfasd fasdf asdf asdf \n\n\n\nfasfasdf",
    links: {
      github: "fasdfsdf",
    },
    media: {
      images: lpDevSocialMediaImgs,
    },
  },
  {
    title: "Social Media - LP",
    description: "fasdfasdfasd fasdfsdfasd fasdf asdf asdf \n\n\n\nfasfasdf",
    links: {
      github: "fasdfsdf",
    },
    media: {
      images: lpKommoImgs,
    },
  },
  {
    title: "Sportify - Ecommerce",
    description: "fasdfasdfasd fasdfsdfasd fasdf asdf asdf \n\n\n\nfasfasdf",
    links: {
      github: "fasdfsdf",
    },
    media: {
      images: ecommerceSportifyImgs,
      video: "/videos/ecommerce.mp4",
    },
  },
];

const projects = treatProjectsVisualization(simpleProjects);

export default projects;
