import { useState, useEffect, useCallback, RefObject } from 'react';
import { UseCarouselReturn, UseIntersectionObserverReturn, UseMenuToggleReturn } from '../types';

// ===== CAROUSEL HOOK =====
export const useCarousel = (itemsLength: number, autoPlayInterval: number = 4000): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsLength - 1 : prevIndex - 1
    );
  }, [isTransitioning, itemsLength]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsLength);
  }, [isTransitioning, itemsLength]);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsLength);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isTransitioning, itemsLength, autoPlayInterval]);

  // Transition timeout effect
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return {
    currentIndex,
    isTransitioning,
    goToPrevious,
    goToNext,
  };
};

// ===== INTERSECTION OBSERVER HOOK =====
export const useIntersectionObserver = (
  threshold: number = 0.2,
  rootMargin: string = '0px'
): UseIntersectionObserverReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useState<RefObject<HTMLElement>>({ current: null })[0];

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold, rootMargin]);

  return { isVisible, ref };
};

// ===== MENU TOGGLE HOOK =====
export const useMenuToggle = (): UseMenuToggleReturn => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Body overflow effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };
};

// ===== LAZY VIDEO HOOK =====
export const useLazyVideo = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleVideoLoad = useCallback(() => {
    setIsIframeLoaded(true);
  }, []);

  return {
    isIframeLoaded,
    handleVideoLoad,
  };
};
