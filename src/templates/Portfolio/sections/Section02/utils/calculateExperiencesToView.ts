import { Experience, ExperienceType } from "@/settings/experiences/types";

const reachTheDivisions = (number: number, division: number): number =>
  number % division !== 0 ? reachTheDivisions(number + 1, division) : number;

const calculateExperiencesToView = (
  exps: Experience[],
  type: ExperienceType
): Array<Experience | null> => {
  const experiencesSelected = exps.filter((ex) => ex.type === type);
  const calculateLengthSquares = reachTheDivisions(
    experiencesSelected.length,
    3
  );
  const emptyArr = new Array(calculateLengthSquares).fill(null);

  const squareExperienceArr = emptyArr.map(
    (_, index) => experiencesSelected[index] || null
  );

  return squareExperienceArr;
};

export default calculateExperiencesToView;
