export interface LinkBio {
  href: string;
  icon: {
    isImg: boolean;
    src: string;
  };
  label: string;
}
export interface ProfileBio {
  title: string;
  subTitle: string;
  description: string;
  links: LinkBio[];
  profile: {
    alt: string;
    src: string;
  };
  banner: {
    alt: string;
    src: string;
  };
}
