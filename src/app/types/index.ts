// ===== DOMAIN TYPES =====
export interface Banner {
  src: string;
  alt: string;
  titulo: string;
  descripcion: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'linkedin';
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

export interface ClientCategory {
  icon: React.ReactNode;
  title: string;
  href?: string;
}

export interface FooterColumn {
  title: string;
  items: string[];
}

// ===== COMPONENT PROPS INTERFACES =====
export interface HeroButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  isDisabled: boolean;
}

export interface HeroSlideProps {
  banner: Banner;
  isActive: boolean;
}

export interface LazyVideoProps {
  videoId: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

export interface IntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  onIntersect?: () => void;
}

// ===== HOOK INTERFACES =====
export interface UseCarouselReturn {
  currentIndex: number;
  isTransitioning: boolean;
  goToPrevious: () => void;
  goToNext: () => void;
}

export interface UseIntersectionObserverReturn {
  isVisible: boolean;
  ref: React.RefObject<HTMLElement>;
}

export interface UseMenuToggleReturn {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

// ===== SERVICE INTERFACES =====
export interface NavigationService {
  getMenuItems(): MenuItem[];
  getSocialLinks(): SocialLink[];
}

export interface ContentService {
  getBanners(): Banner[];
  getClientCategories(): ClientCategory[];
  getFooterColumns(): FooterColumn[];
}

// ===== CONFIGURATION INTERFACES =====
export interface AppConfig {
  companyName: string;
  baseUrl: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
}

// ===== UTILITY TYPES =====
export type Direction = 'left' | 'right';
export type SocialPlatform = 'instagram' | 'facebook' | 'linkedin';
export type AnimationState = 'entering' | 'entered' | 'exiting' | 'exited';
