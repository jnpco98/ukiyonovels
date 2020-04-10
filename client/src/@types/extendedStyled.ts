import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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

      // Font weight
      light: string;
      regular: string;
      bold: string;

      // Letter spacing
      narrow: string;
      default: string;
      wide: string;

      // Font Family
      primary: string;
      secondary: string;
    };
    colors: {
      // Standard Colors
      default: string;
      defaultSubdued: string;

      // Backgrounds
      background: string;
      backgroundSecondary: string;
      backgroundTertiary: string;

      // Borders
      border: string;
      borderHover: string;
      borderSecondary: string;
      borderSecondaryHover: string;

      // Scheme
      primary: string;
      primaryCompliment: string;

      secondary: string;
      secondaryCompliment: string;

      tertiary: string;
      tertiaryCompliment: string;

      // Hover
      defaultHover: string;

      primaryHover: string;
      primaryComplimentHover: string;

      secondaryHover: string;
      secondaryComplimentHover: string;

      tertiaryHover: string;
      tertiaryComplimentHover: string;

      // Disabled
      disabled: string;
      disabledCompliment: string;

      selection: string;

      backdrop: string;

      // Form color sets
      info: string;
      success: string;
      warning: string;
      error: string;
    };
  }
}
