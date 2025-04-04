import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

interface ResponsiveState {
  width: number;
  height: number;
  breakpoint: Breakpoint;
}

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const getBreakpoint = (width: number): Breakpoint => {
  if (width < breakpoints.sm) return 'sm';
  if (width < breakpoints.md) return 'md';
  if (width < breakpoints.lg) return 'lg';
  return 'xl';
};

export const useResponsive = () => {
  const [state, setState] = useState<ResponsiveState>({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: getBreakpoint(window.innerWidth)
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setState({
        width,
        height: window.innerHeight,
        breakpoint: getBreakpoint(width)
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}; 