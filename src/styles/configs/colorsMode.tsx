import { IColorKeys, IToneColor, ITypeColor } from "./types";

export const colorsModeLight: Record<
  IColorKeys,
  Record<ITypeColor, Record<IToneColor, string>>
> = {
  orange: {
    background: {
      main: "#f79319",
      light: "#F1B927",
    },
    color: {
      main: "#f79319",
      light: "#F1B927",
    },
  },
  alert: {
    background: {
      main: "#ffff00",
      light: "#ffff00",
    },
    color: {
      main: "#ffff00",
      light: "#ffff00",
    },
  },
  danger: {
    background: {
      main: "#e73434",
      light: "",
    },
    color: {
      main: "#e73434",
      light: "",
    },
  },
  primary: {
    background: {
      main: "#FFFFFF",
      light: "#F6F6F7",
    },
    color: {
      main: "#1B1B1F",
      light: "#202127",
    },
  },
  secondary: {
    background: {
      main: "#E7E8EC",
      light: "#E7E8EC",
    },
    color: {
      main: "#E7E8EC",
      light: "#E7E8EC",
    },
  },
  third: {
    background: {
      main: "#5a62f5",
      light: "#676ffc",
    },
    color: {
      main: "#5a62f5",
      light: "#676ffc",
    },
  },
  light: {
    background: {
      main: "#EFF0F3",
      light: "#7B7B7F",
    },
    color: {
      main: "#3C3C43",
      light: "#7B7B7F",
    },
  },
  success: {
    background: {
      main: "#2de829",
      light: "#27ad75",
    },
    color: {
      main: "#2de829",
      light: "#27ad75",
    },
  },
  info: {
    background: {
      main: "#999ff7",
      light: "#AEB2EC",
    },
    color: {
      main: "#5a62f5",
      light: "#676ffc",
    },
  },
  dark: {
    background: {
      main: "#000",
      light: "#161618",
    },
    color: {
      main: "#000",
      light: "#161618",
    },
  },
};

export const colorsModeDark: Record<
  IColorKeys,
  Record<ITypeColor, Record<IToneColor, string>>
> = {
  orange: {
    background: {
      main: "#f79319",
      light: "#F1B927",
    },
    color: {
      main: "#f79319",
      light: "#F1B927",
    },
  },
  alert: {
    background: {
      main: "#ffff00",
      light: "#ffff00",
    },
    color: {
      main: "#ffff00",
      light: "#ffff00",
    },
  },
  danger: {
    background: {
      main: "#e73434",
      light: "",
    },
    color: {
      main: "#e73434",
      light: "",
    },
  },
  primary: {
    background: {
      main: "#1B1B1F",
      light: "#202127",
    },
    color: {
      main: "#1B1B1F",
      light: "#202127",
    },
  },
  secondary: {
    background: {
      main: "#303338",
      light: "#414853",
    },
    color: {
      main: "#303338",
      light: "#414853",
    },
  },
  third: {
    background: {
      main: "#5a62f5",
      light: "#676ffc",
    },
    color: {
      main: "#5a62f5",
      light: "#676ffc",
    },
  },
  light: {
    background: {
      main: "#DEDED6",
      light: "#909197",
    },
    color: {
      main: "#DEDED6",
      light: "#909197",
    },
  },
  success: {
    background: {
      main: "#2de829",
      light: "#27ad75",
    },
    color: {
      main: "#2de829",
      light: "#27ad75",
    },
  },
  info: {
    background: {
      main: "#999ff7",
      light: "#AEB2EC",
    },
    color: {
      main: "#999ff7",
      light: "#AEB2EC",
    },
  },
  dark: {
    background: {
      main: "#000",
      light: "#161618",
    },
    color: {
      main: "#000",
      light: "#161618",
    },
  },
};
