import {
  IBreakpoints,
  IBreakpointKeys,
  IHeadingKeys,
  IParagraphKeys,
} from "./types";

type IBreakFonts = Record<
  IBreakpointKeys,
  {
    headings: Record<IHeadingKeys, string[]>;
    paragraphs: Record<IParagraphKeys, string[]>;
  }
>;

export const breakpoints: IBreakpoints = {
  sm: "400px",
  md: "700px",
  lg: "1200px",
};

export const breakFonts: IBreakFonts = {
  lg: {
    headings: {
      h1: ["4rem", "4.5rem"], // Aumento dos tamanhos das fontes h1
      h2: ["2rem", "2.5rem"], // Aumento dos tamanhos das fontes h2
      h3: ["1.5rem", "1.8rem"], // Aumento dos tamanhos das fontes h3
      h4: ["1.1rem", "1.4rem"], // Aumento dos tamanhos das fontes h4
    },
    paragraphs: {
      xxsm: ["0.7rem", "1.1rem"], // Aumento dos tamanhos das fontes xxsm
      xsm: ["0.9rem", "1.3rem"], // Aumento dos tamanhos das fontes xsm
      sm: ["1.1rem", "1.5rem"], // Aumento dos tamanhos das fontes sm
      md: ["1.4rem", "1.8rem"], // Aumento dos tamanhos das fontes md
    },
  },
  md: {
    headings: {
      h1: ["3rem", "3.8rem"], // Aumento dos tamanhos das fontes h1
      h2: ["1.8rem", "2.2rem"], // Aumento dos tamanhos das fontes h2
      h3: ["1.2rem", "1.6rem"], // Aumento dos tamanhos das fontes h3
      h4: ["1rem", "1.4rem"], // Aumento dos tamanhos das fontes h4
    },
    paragraphs: {
      xxsm: ["0.6rem", ".9rem"], // Aumento dos tamanhos das fontes xxsm
      xsm: ["0.8rem", "1.1rem"], // Aumento dos tamanhos das fontes xsm
      sm: ["1rem", "1.4rem"], // Aumento dos tamanhos das fontes sm
      md: ["1.2rem", "1.6rem"], // Aumento dos tamanhos das fontes md
    },
  },
  sm: {
    headings: {
      h1: ["2rem", "2.8rem"], // Aumento dos tamanhos das fontes h1
      h2: ["1.8rem", "2.2rem"], // Aumento dos tamanhos das fontes h2
      h3: ["1.2rem", "1.6rem"], // Aumento dos tamanhos das fontes h3
      h4: ["1rem", "1.4rem"], // Aumento dos tamanhos das fontes h4
    },
    paragraphs: {
      xxsm: ["0.5rem", "0.8rem"], // Aumento dos tamanhos das fontes xxsm
      xsm: ["0.7rem", "1rem"], // Aumento dos tamanhos das fontes xsm
      sm: ["0.9rem", "1.3rem"], // Aumento dos tamanhos das fontes sm
      md: ["1rem", "1.4rem"], // Aumento dos tamanhos das fontes md
    },
  },
};
