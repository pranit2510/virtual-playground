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
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
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