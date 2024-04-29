import { ReactNode } from "react";

export type TypeMediaProject = "image" | "video";

export interface Project {
  id: string;
  title: string;
  description: string | ReactNode;
  images: { src: string; type: TypeMediaProject }[];
  links: {
    github?: string;
    site?: string;
    youtube?: string;
  };
}

export interface SimpleProject extends Omit<Project, "images" | "id"> {
  media: {
    video?: string;
    images: string[];
  };
}
