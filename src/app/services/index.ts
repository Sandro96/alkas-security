import { MenuItem, SocialLink, ClientCategory, FooterColumn, Banner } from '../types';

// ===== CONFIGURATION SERVICE =====
export class AppConfigService {
  private static instance: AppConfigService;
  private config = {
    companyName: "Alka's Security",
    baseUrl: "https://alkas-security.com",
    socialLinks: {
      instagram: "https://www.ramirezsandro.com",
      facebook: "https://www.ramirezsandro.com", 
      linkedin: "https://www.ramirezsandro.com"
    },
    contact: {
      phone: "+ 598 1234 56 78",
      email: "ramirezsandro96@gmail.com",
      address: "Calle 1234 Montevideo - Uruguay",
      hours: "Lunes a Viernes de 10:00hs a 18hs"
    }
  };

  static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService();
    }
    return AppConfigService.instance;
  }

  getConfig() {
    return this.config;
  }
}

// ===== NAVIGATION SERVICE =====
export class NavigationService {
  getMenuItems(): MenuItem[] {
    return [
      { label: "Nosotros", href: "#la-empresa" },
      { label: "Servicios", href: "#servicios" },
      { label: "Tecnologías", href: "#tecnología" },
      { label: "Clientes", href: "#clientes" },
      { label: "Contacto", href: "#contacto" },
    ];
  }

  getSocialLinks(): SocialLink[] {
    const config = AppConfigService.getInstance().getConfig();
    return [
      {
        platform: 'instagram',
        url: config.socialLinks.instagram,
        ariaLabel: "Visítanos en Instagram",
        icon: null // Will be injected by component
      },
      {
        platform: 'facebook', 
        url: config.socialLinks.facebook,
        ariaLabel: "Visítanos en Facebook",
        icon: null
      },
      {
        platform: 'linkedin',
        url: config.socialLinks.linkedin,
        ariaLabel: "Visítanos en LinkedIn", 
        icon: null
      }
    ];
  }
}

// ===== CONTENT SERVICE =====
export class ContentService {
  getBanners(): Banner[] {
    return [
      { 
        src: "/branch.webp", 
        alt: "Sucursal de Alka's Security - Oficina principal con atención personalizada", 
        titulo: "Nuestra sucursal", 
        descripcion: "Visítanos en nuestra sucursal para recibir atención personalizada y asesoramiento." 
      },
      { 
        src: "/experts.webp", 
        alt: "Equipo de expertos en seguridad de Alka's Security - Respuesta inmediata 24/7", 
        titulo: "Respuesta inmediata", 
        descripcion: "Contamos con un equipo de expertos listos para atender cualquier emergencia las 24 horas del día." 
      },
      { 
        src: "/tecnology.webp", 
        alt: "Tecnología de vanguardia en seguridad - Sistemas avanzados de protección", 
        titulo: "Innovamos en seguridad", 
        descripcion: "Implementamos tecnología de vanguardia para garantizar su protección o la de su negocio." 
      }
    ];
  }

  getClientCategories(): ClientCategory[] {
    return [
      { icon: null, title: "Bancos" },
      { icon: null, title: "Supermercados" },
      { icon: null, title: "Navieras" },
      { icon: null, title: "Cambios" },
      { icon: null, title: "Entes Públicos" },
      { icon: null, title: "Mutualistas" },
      { icon: null, title: "Mayoristas" },
      { icon: null, title: "Financieras" },
    ];
  }

  getFooterColumns(): FooterColumn[] {
    const config = AppConfigService.getInstance().getConfig();
    return [
      {
        title: "OFICINA",
        items: [
          config.companyName,
          config.contact.address,
          config.contact.hours,
        ]
      },
      {
        title: "CONTACTO", 
        items: [
          `Tel: ${config.contact.phone}`,
          `Email: ${config.contact.email}`
        ]
      },
      {
        title: "SOBRE NOSOTROS",
        items: ["Objetivo y Valores", "Nuestra Historia", "Fundación"]
      }
    ];
  }
}
