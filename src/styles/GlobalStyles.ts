import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    background: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.text.light};
    line-height: 1.5;
    transition: background-color ${({ theme }) => theme.transitions.default},
                color ${({ theme }) => theme.transitions.default};

    &.dark-mode {
      background: ${({ theme }) => theme.colors.background.dark};
      color: ${({ theme }) => theme.colors.text.dark};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary.glow};
    color: ${({ theme }) => theme.colors.text.dark};
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.light};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  /* Utility classes */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  .text-gradient {
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.primary.main}, 
      ${({ theme }) => theme.colors.accent.purple}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glow {
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`; 