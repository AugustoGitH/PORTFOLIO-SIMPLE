import { ProfileBio } from "./types";

import profile from "@/assets/imgs/profiles/augusto-ia.png";
import banner from "@/assets/imgs/bio/banner.png";
import imgLoucoDaSyntax from "@/assets/imgs/bio/bio-louco-da-syntax.png";
import { socialLinks } from "../socialLinks";
const bio: ProfileBio = {
  banner: {
    alt: "Minha banner",
    src: banner,
  },
  profile: {
    alt: "Meu Perfil",
    src: profile,
  },
  description: `Estudante de Engenharia de Software, em início de carreira com aproximadamente 2 anos de experiência e buscando se desenvolver na área.

  Acredito que a tecnologia é uma ferramenta poderosa para mudar o mundo e estou sempre em busca de novos desafios e oportunidades para contribuir para essa causa. `,
  title: "Augusto Caetano Westphal 🚀",
  subTitle: "Desenvolvedor Web Full-Stack 🌌",
  links: [
    {
      href: "/portfolio",
      icon: {
        isImg: false,
        src: "material-symbols-light:folder",
      },
      label: "Portfólio",
    },
    {
      href: "https://github.com/AugustoGitH",
      icon: {
        isImg: true,
        src: imgLoucoDaSyntax,
      },
      label: "Louco da Syntax",
    },

    {
      href: socialLinks.linkedin.href,
      icon: {
        isImg: false,
        src: "mdi:linkedin",
      },
      label: "Linkedin",
    },
    {
      href: socialLinks.github.href,
      icon: {
        isImg: false,
        src: "mdi:github",
      },
      label: "Github",
    },
  ],
};

export default bio;
