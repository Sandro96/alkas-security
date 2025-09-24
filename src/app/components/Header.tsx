"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconExtend from "@/app/assets/icon-extend.svg";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";
import { useMenuToggle } from "../hooks";
import { NavigationService, AppConfigService } from "../services";
import { SocialLink } from "../types";

const SocialIcon: React.FC<{ platform: string }> = ({ platform }) => {
  const iconMap = {
    instagram: <RiInstagramFill size={30} />,
    facebook: <FaFacebookSquare size={30} />,
    linkedin: <FaLinkedin size={30} />,
  };
  
  return iconMap[platform as keyof typeof iconMap] || null;
};

const SocialLinkComponent: React.FC<{ socialLink: SocialLink }> = ({ socialLink }) => (
  <a
    href={socialLink.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-secondary hover:text-black hover:scale-110 transition-transform"
    aria-label={socialLink.ariaLabel}
  >
    <SocialIcon platform={socialLink.platform} />
  </a>
);

const MobileMenu: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  menuItems: Array<{ label: string; href: string }> 
}> = ({ isOpen, onClose, menuItems }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="absolute top-full left-0 w-full bg-secondary text-white py-5 px-3 z-40">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block text-zinc-300 hover:text-white font-bebas text-xl relative after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-[-1px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={onClose}
        className="fixed top-[56px] left-0 w-full h-full bg-black bg-opacity-50 z-30"
      />
    </>
  );
};

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuToggle();
  const navigationService = new NavigationService();
  const config = AppConfigService.getInstance().getConfig();
  
  const socialLinks = navigationService.getSocialLinks();
  const menuItems = navigationService.getMenuItems();

  return (
    <div className="relative w-full border-b-2 bg-white z-50">
      <div className="flex justify-between items-center p-3 container mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src={IconExtend} 
            alt={`${config.companyName} - Servicios de Seguridad y Transporte de Valores en Uruguay`}
            height={48}
            priority
            loading="eager"
          />
        </Link>

        <div className="flex items-center gap-5 text-center">
          <div className="hidden md:flex space-x-4">
            {socialLinks.map((socialLink, index) => (
              <SocialLinkComponent key={index} socialLink={socialLink} />
            ))}
          </div>
          <a
            href={config.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-normal text-secondary hover:text-black font-bebas text-3xl relative after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-[-1px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            TRABAJA CON NOSOTROS
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden text-secondary hover:text-black transition-transform"
          >
            {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={closeMenu} 
        menuItems={menuItems} 
      />
    </div>
  );
};

export default Header;
