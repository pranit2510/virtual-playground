import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | null;
  lastY: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
    lastY: 0
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > scrollPosition.lastY ? 'down' : 'up';

      setScrollPosition({
        x: window.scrollX,
        y: currentY,
        direction,
        lastY: currentY
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition.lastY]);

  const getParallaxStyle = (speed: number = 0.5) => {
    if (!elementRef.current) return {};

    const rect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementBottom = rect.bottom;
    const elementHeight = rect.height;

    // Calculate how far the element is from the center of the viewport
    const distanceFromCenter = (elementTop + elementHeight / 2) - (viewportHeight / 2);
    const translateY = distanceFromCenter * speed;

    return {
      transform: `translateY(${translateY}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  const getFadeStyle = () => {
    if (!elementRef.current) return {};

    const rect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    // Calculate opacity based on element position
    const opacity = Math.max(
      0,
      Math.min(
        1,
        1 - (elementTop - viewportHeight * 0.5) / (viewportHeight * 0.5)
      )
    );

    return {
      opacity,
      transition: 'opacity 0.3s ease-out'
    };
  };

  return {
    elementRef,
    isVisible,
    scrollPosition,
    getParallaxStyle,
    getFadeStyle
  };
}; 