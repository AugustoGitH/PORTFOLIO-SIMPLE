import { ProfileBio } from "./types";

import profile from "@/assets/imgs/profiles/augusto-ia.webp";
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
  description:
    "Desenvolvedor Web Full-Stack, com aproximadamente 4 anos de experiência, comprometido em utilizar a tecnologia como uma ferramenta catalisadora para impactar positivamente a sociedade. Busco incessantemente novos desafios e oportunidades para aprimorar minhas habilidades e contribuir de forma significativa para projetos inovadores e inspiradores.",
  title: "Augusto Caetano Westphal",
  subTitle: "Desenvolvedor Web Full-Stack 🚀",
  links: [
    [
      "Veja o meu",
      [
        {
          href: "/portfolio",
          icon: {
            isImg: false,
            src: "material-symbols-light:folder",
          },
          label: "Portfólio",
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
    ],
    [
      "Me siga no",
      [
        {
          href: "https://www.instagram.com/louco_da_syntax/",
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
      ],
    ],
  ],
};

export default bio;
