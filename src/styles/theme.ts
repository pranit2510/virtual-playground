<<<<<<< HEAD
export const theme = {
  colors: {
    primary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4F46E5',
      glow: 'rgba(99, 102, 241, 0.3)',
    },
    secondary: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      glow: 'rgba(16, 185, 129, 0.3)',
    },
    background: {
      light: '#FFFFFF',
      dark: '#0F172A',
      gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
    },
    text: {
      light: '#1E293B',
      dark: '#F8FAFC',
      muted: '#64748B',
    },
    accent: {
      purple: '#8B5CF6',
      blue: '#3B82F6',
      green: '#10B981',
      pink: '#EC4899',
    },
  },
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Space Grotesk', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
=======
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#6200ee',
    primaryDark: '#3700b3',
    secondary: '#03dac6',
    background: '#ffffff',
    cardBackground: '#f5f5f5',
    surface: '#ffffff',
    text: '#000000',
    textSecondary: '#666666',
    border: '#e0e0e0',
    error: '#b00020',
    success: '#00c853',
    warning: '#ffd600',
    disabled: '#cccccc',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    body: '1rem',
    small: '0.875rem',
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
<<<<<<< HEAD
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    glow: '0 0 15px rgba(99, 102, 241, 0.5)',
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export type Theme = typeof theme; 
=======
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#bb86fc',
    primaryDark: '#3700b3',
    secondary: '#03dac6',
    background: '#121212',
    cardBackground: '#1e1e1e',
    surface: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    border: '#333333',
    error: '#cf6679',
    success: '#00c853',
    warning: '#ffd600',
    disabled: '#666666',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.2)',
    large: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    body: '1rem',
    small: '0.875rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
}; 
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
