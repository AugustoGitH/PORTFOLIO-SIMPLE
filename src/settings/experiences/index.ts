import { Experience } from "./types";
import { v4 as uuid } from "uuid";
type SimpleExperience = Omit<Experience, "id">;

const treatExperiencesVisualization = (
  experiences: SimpleExperience[]
): Experience[] => {
  return experiences.map((experience) => ({
    ...experience,
    id: uuid(),
  }));
};

const simpleExperiences: SimpleExperience[] = [
  {
    office: "Desenvolvedor Web Full-Stack",
    company: "Digital Mind",
    date: "04/2024 - *",
    type: "company",
  },
  {
    office: "Desenvolvedor Web Front-End",
    company: "Elys",
    date: "05/2024 - *",
    type: "company",
  },
  {
    office: "Desenvolvedor Web Full-Stack",
    company: "DRT Sistemas",
    date: "08/2023 - 02/2024",
    type: "company",
  },
  {
    office: "Desenvolvedor Web Full-Stack",
    company: "Tech Legion",
    date: "03/2023 - 04/2024",
    type: "company",
  },
  {
    office: "Desenvolvedor Web Full-Stack",
    company: "Autonômo",
    date: "04/2024 - *",
    type: "freelancer",
  },
  {
    office: "Desenvolvedor Web Full-Stack",
    company: "Workana",
    date: "08/2022 - 04/2024",
    type: "freelancer",
  },
  {
    office: "Web Designer",
    company: "Get Ninjas",
    date: "05/2023 - 06/2023",
    type: "freelancer",
  },
];

export const experiences = treatExperiencesVisualization(simpleExperiences);
