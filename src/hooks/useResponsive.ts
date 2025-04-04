import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface BreakpointConfig {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

const defaultBreakpoints: BreakpointConfig = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

interface ResponsiveState {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

export const useResponsive = (
  customBreakpoints?: Partial<BreakpointConfig>
): ResponsiveState => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };

  const getBreakpoint = (width: number): Breakpoint => {
    if (width >= breakpoints['2xl']) return '2xl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    return 'sm';
  };

  const [state, setState] = useState<ResponsiveState>({
    breakpoint: 'sm',
    isMobile: true,
    isTablet: false,
    isDesktop: false,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const breakpoint = getBreakpoint(width);

      setState({
        breakpoint,
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
        width,
        height
      });
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isBreakpoint = (breakpoint: Breakpoint): boolean => {
    return state.breakpoint === breakpoint;
  };

  const isAboveBreakpoint = (breakpoint: Breakpoint): boolean => {
    const breakpointValues = {
      sm: 0,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
      '2xl': breakpoints['2xl']
    };
    return state.width >= breakpointValues[breakpoint];
  };

  const isBelowBreakpoint = (breakpoint: Breakpoint): boolean => {
    const breakpointValues = {
      sm: 0,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
      '2xl': breakpoints['2xl']
    };
    return state.width < breakpointValues[breakpoint];
  };

  return {
    ...state,
    isBreakpoint,
    isAboveBreakpoint,
    isBelowBreakpoint
  };
}; 