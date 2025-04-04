import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  textSecondary: '#666666',
  primary: '#007AFF',
  primaryDark: '#0056b3',
  secondary: '#5856D6',
  accent: '#FF2D55',
  error: '#b00020',
  surface: '#f5f5f5',
  cardBackground: '#ffffff',
  border: '#e0e0e0',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
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
  background: '#000000',
  text: '#ffffff',
  textSecondary: '#a0a0a0',
  primary: '#0A84FF',
  primaryDark: '#0056b3',
  secondary: '#5E5CE6',
  accent: '#FF375F',
  error: '#cf6679',
  surface: '#1c1c1e',
  cardBackground: '#1c1c1e',
  border: '#2c2c2e',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
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