import portfolioAtualImgs from "@/assets/imgs/projects/portfolio-atual";
import onlinksImgs from "@/assets/imgs/projects/onlinks";

import { ReactNode } from "react";

interface Project {
  name: string;
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
    name: "portfolio-atual",
    title: "Portfólio Atual",
    description: <>Meu <strong>portfólio atual</strong>, este mesmo que você está vendo, é uma versão simplificada do anterior.<br /> Anteriormente, eu precisava de hospedagem de servidor e banco de dados, então desenvolvi um CMS para gerenciar meus projetos.<br /> No portfólio atual, optei por utilizar <strong>React</strong>, <strong>TypeScript</strong> e <strong>styled-components</strong>.</>,

    images: tratedMediasProject(portfolioAtualImgs, "/public/videos/portfolio-atual.mp4"),
    links: {
      github: "fasfsdfasdfasdfasd",
      site: "fasfsdfasdfasdfasd",
    },
  },
  {
    name: "onlinks",
    title: "Onlinks - Página de Links",
    description: <>No Onlinks, exploramos múltiplos perfis numa única página, permitindo que criadores compartilhem diversos aspectos online sem várias contas.<br /> No frontend, optamos por <strong>Next.js</strong> e <strong>TypeScript</strong> para agilidade e cacheamento. No backend, criamos um encurtador de links com <strong>Express.js</strong>, <strong>TypeScript</strong>, e <strong>MongoDB</strong>.</>,

    images: tratedMediasProject(onlinksImgs, "/public/videos/portfolio-atual.mp4"),
    links: {
      github: "fasfsdfasdfasdfasd",
      site: "fasfsdfasdfasdfasd",
    },
  },
];

export default projects;
