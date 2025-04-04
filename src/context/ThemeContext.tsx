import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';

export type Theme = 'light' | 'dark';

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    text: '#333333',
    textSecondary: '#666666',
    primary: '#007AFF',
    primaryDark: '#0056B3',
    secondary: '#5856D6',
    accent: '#FF2D55',
    error: '#FF3B30',
    surface: '#F2F2F7',
    cardBackground: '#FFFFFF',
    border: '#E5E5EA'
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  }
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    textSecondary: '#AEAEB2',
    primary: '#0A84FF',
    primaryDark: '#0056B3',
    secondary: '#5E5CE6',
    accent: '#FF375F',
    error: '#FF453A',
    surface: '#1C1C1E',
    cardBackground: '#2C2C2E',
    border: '#38383A'
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  }
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  currentTheme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
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