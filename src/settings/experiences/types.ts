export type ExperienceType = "freelancer" | "company";

export interface Experience {
  id: string;
  office: string;
  company: string;
  date: string;
  type: ExperienceType;
}
