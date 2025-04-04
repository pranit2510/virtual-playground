import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    text: '#333333',
    background: '#ffffff',
    accent: '#ff4081',
    error: '#b00020',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem',
  },
};

const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  colors: {
    primary: '#bb86fc',
    secondary: '#03dac6',
    text: '#ffffff',
    background: '#121212',
    accent: '#cf6679',
    error: '#cf6679',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem',
  },
};

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentTheme: typeof lightTheme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
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