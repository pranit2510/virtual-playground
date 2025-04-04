import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

export const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const slideIn: Variants = {
  hidden: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? -100 : 100,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: 'easeInOut'
  }
};

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: 'easeInOut'
  }
};

export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30
};

export const smoothTransition = {
  type: 'tween',
  duration: 0.3,
  ease: 'easeInOut'
};

export const getScrollProgress = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  const elementHeight = rect.height;

  // Calculate how far the element is through the viewport
  const progress = (viewportHeight - elementTop) / (viewportHeight + elementHeight);
  return Math.max(0, Math.min(1, progress));
};

export const getParallaxOffset = (
  element: HTMLElement,
  speed: number = 0.5
): number => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const elementTop = rect.top;
  const elementHeight = rect.height;

  // Calculate how far the element is from the center of the viewport
  const distanceFromCenter = (elementTop + elementHeight / 2) - (viewportHeight / 2);
  return distanceFromCenter * speed;
};

export const getScrollDirection = (): 'up' | 'down' | null => {
  let lastScrollY = window.scrollY;
  let direction: 'up' | 'down' | null = null;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    direction = currentScrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return direction;
}; 