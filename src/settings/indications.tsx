import leonardo from "@/assets/imgs/profiles/leonardo.webp";
import emanuel from "@/assets/imgs/profiles/emanuel.webp";
import italo from "@/assets/imgs/profiles/italo.webp";
import samir from "@/assets/imgs/profiles/samir.webp";
import warllei from "@/assets/imgs/profiles/warllei.webp";
import { ReactNode } from "react";
interface Indication {
  name: string,
  linkedin: string,
  description: string | ReactNode,
  auth: {
    label: string,
    href: string
  },
  profile: {
    src: string,
    alt: string
  }
}
export const indications: Indication[] = [
  {
    name: "Leonardo",
    linkedin: "https://www.linkedin.com/in/leogionardo/",
    description: <>
      É uma honra ter cruzado o caminho do <strong>Augusto Westphal</strong> e um orgulho estar ao seu lado, onde tive a oportunidade de conhecer um excelente profissional e uma pessoa incrível. Parabéns pelo projeto, meu nobre 👏.
    </>,
    auth: {
      label: "Comentário no Linkedin",
      href: "https://www.linkedin.com/posts/augusto-westphal_desenvolvimentoweb-nextjs-expressjs-activity-7178782843492331521-usCu?utm_source=share&utm_medium=member_desktop"
    },
    profile: {
      src: leonardo,
      alt: "Image Leonardo",
    },
  },
  {
    name: "Emanuel",
    linkedin: "https://www.linkedin.com/in/emanuel-akuma/",
    description: <>
      Eu tive o prazer de trabalhar com <strong>Augusto</strong> em alguns projetos e posso dizer com confiança que ele é um profissional excepcional. Suas habilidades analíticas e técnicas são impressionantes, e ele é um designer gráfico talentoso e um desenvolvedor excepcional.
    </>,
    auth: {
      label: "Recomendação no Linkedin",
      href: "https://www.linkedin.com/in/augusto-westphal/details/recommendations/"
    },
    profile: {
      src: emanuel,
      alt: "Image Emanuel",
    },
  },

  {
    name: "Camilo Italo",
    linkedin: "https://www.linkedin.com/in/camilo-italo/",
    description: <>
      É incrível como tudo que tu faz é meio que um pouco a tua cara, você é um Dev como poucos.
    </>,
    auth: {
      label: "Comentário no Linkedin",
      href: "https://www.linkedin.com/posts/augusto-westphal_webdevelopment-dynamicpermissions-tokengeneration-activity-7179507628153135104-s5Px?utm_source=share&utm_medium=member_desktop"
    },
    profile: {
      src: italo,
      alt: "Image Camilo Italo",
    },
  },
  {
    name: "Samir",
    linkedin: "https://www.linkedin.com/in/samir-laguardia/",
    description: <>
      Minha primeira experiência com <strong>Augusto</strong> como desenvolvedor web foi incrível. Ele é altamente habilidoso, mantém uma excelente comunicação no home office, e é proativo em impulsionar projetos com novas ideias.
    </>,
    auth: {
      label: "Recomendação no Linkedin",
      href: "https://www.linkedin.com/in/augusto-westphal/details/recommendations/"
    },
    profile: {
      src: samir,
      alt: "Image Samir",
    },
  },
  {
    name: "Warllei",
    linkedin: "https://www.linkedin.com/in/warllei-martins-823510153/",
    description: <>
      É com prazer que recomendo <strong>Augusto Westphal</strong> como um desenvolvedor Full-Stack altamente competente. Durante nosso tempo juntos na DRT Sistemas, Augusto demonstrou habilidades notáveis em Node.js, React.js e Next.js, entregando projetos de alta qualidade.
    </>,
    auth: {
      label: "Recomendação no Linkedin",
      href: "https://www.linkedin.com/in/augusto-westphal/details/recommendations/"
    },
    profile: {
      src: warllei,
      alt: "Image Warllei",
    },
  },
];
