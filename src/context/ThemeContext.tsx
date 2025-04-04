import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
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
    border: '#e0e0e0'
  },
  typography: {
    small: '0.875rem'
  }
};

const darkTheme = {
  colors: {
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
    border: '#2c2c2e'
  },
  typography: {
    small: '0.875rem'
  }
};

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  currentTheme: typeof lightTheme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  currentTheme: lightTheme
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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