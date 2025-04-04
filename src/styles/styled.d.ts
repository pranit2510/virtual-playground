import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
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
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
      small: string;
    };
  }
}