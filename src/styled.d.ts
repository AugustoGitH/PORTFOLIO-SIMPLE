import "styled-components";
import {
  IBreakpoints,
  IColorKeys,
  IHeadingKeys,
  IParagraphKeys,
  IToneColor,
  ITypeColor,
} from "./styles/configs/types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<IColorKeys, Record<ITypeColor, Record<IToneColor, string>>>;
    limits: {
      content: string;
    };
    font: {
      family: {
        Roboto: string;
        Poppins: string;
      };
      size: {
        headings: Record<IHeadingKeys, string[]>;
        paragraphs: Record<IParagraphKeys, string[]>;
      };
    };
    breakpoints: IBreakpoints;
  }
}
