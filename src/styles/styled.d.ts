import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      textSecondary: string;
      primary: string;
      primaryDark: string;
      secondary: string;
      accent: string;
      error: string;
      surface: string;
      cardBackground: string;
      border: string;
    };
    typography: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
      small: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}