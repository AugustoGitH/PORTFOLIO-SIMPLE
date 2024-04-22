export const shares = (link: string) => [
  {
    icon: "bxl:snapchat",
    href: `snapchat://creativeKitWeb/camera/1?attachmentUrl=${link}`,
    title: "Compartilhe no Snapchat",
  },
  {
    icon: "ic:baseline-facebook",
    href: `https://www.facebook.com/sharer.php?u=${link}`,
    title: "Compartilhe no Facebook",
  },
  {
    icon: "mdi:linkedin",
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${link}`,
    title: "Compartilhe no Linkedin",
  },
  {
    icon: "ri:twitter-x-fill",
    href: `https://x.com/intent/tweet/${link}`,
    title: "Compartilhe no X",
  },
  {
    icon: "ic:baseline-whatsapp",
    href: `https://wa.me/${link}`,
    title: "Compartilhe no Whatsapp",
  },
  {
    icon: "mingcute:messenger-fill",
    href: "https://www.messenger.com/new",
    title: "Compartilhe no Massenger",
  },
  {
    icon: "ic:baseline-email",
    href: `mailto:${link}`,
    title: "Compartilhe via Email",
  },
];
