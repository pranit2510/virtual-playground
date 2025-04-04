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
      primary: string;
      secondary: string;
      text: string;
      background: string;
      accent: string;
      error: string;
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