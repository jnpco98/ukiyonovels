import 'styled-components';

declare module 'styled-components' {
  export interface ThemeSettings {
    gutterHorizontal: {
      base: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    gutterVertical: {
      base: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    font: {
      baseSize: string;
      weightLight: string;
      weightRegular: string;
      weightBold: string;
      primary: string;
      secondary: string;
    };
    colors: {
      default: string;
      subdued: string;

      black: string;
      white: string;

      background: string;
      backgroundAlternate: string;

      border: string;
      borderHover: string;
      borderAlternate: string;
      borderHoverAlternate: string;

      primary: string;
      primaryCompliment: string;
      secondary: string;
      secondaryCompliment: string;
      accent: string;
      accentCompliment: string;

      selection: string;

      info: string;
      infoCompliment: string;
      success: string;
      successCompliment: string;
      warning: string;
      warningCompliment: string;
      error: string;
      errorCompliment: string;
    };
  }
}
