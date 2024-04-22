import { Icon } from "@iconify/react"
import { ReactNode } from "react";

interface SocialLink {
  href: string,
  title: string,
  icon: ReactNode
}
export const socialLinks: Record<"linkedin" | "whatsapp" | "github", SocialLink> = {
  linkedin: {
    href: "https://www.linkedin.com/in/augusto-westphal/",
    title: "Linkedin",
    icon: <Icon icon="mdi:linkedin" />
  },
  whatsapp: {
    href: "https://wa.me/5527996586710",
    title: "Whatsapp",
    icon: <Icon icon="ic:baseline-whatsapp" />
  },
  github: {
    href: "https://github.com/AugustoGitH",
    title: "Github",
    icon: <Icon icon="mdi:github" />
  },
};
