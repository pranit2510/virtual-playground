import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  background: '#ffffff',
  text: '#333333',
  primary: '#007bff',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    text: '#333333',
    background: '#ffffff',
    accent: '#17a2b8'
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    body: '1rem'
  }
};

const darkTheme: DefaultTheme = {
  background: '#333333',
  text: '#ffffff',
  primary: '#007bff',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    text: '#ffffff',
    background: '#333333',
    accent: '#17a2b8'
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    body: '1rem'
  }
};

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  currentTheme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 