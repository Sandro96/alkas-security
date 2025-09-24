"use client";

import React from "react";
import { FaUniversity, FaShoppingCart, FaShip, FaExchangeAlt } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { GiCash, GiHealthNormal } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { useIntersectionObserver } from "../hooks";
import { ContentService, AppConfigService } from "../services";
import { Section } from "./ui";

const ClientCategoryIcon: React.FC<{ title: string }> = ({ title }) => {
  const iconMap = {
    "Bancos": <FaUniversity size={40} />,
    "Supermercados": <FaShoppingCart size={40} />,
    "Navieras": <FaShip size={40} />,
    "Cambios": <FaExchangeAlt size={40} />,
    "Entes Públicos": <RiGovernmentFill size={40} />,
    "Mutualistas": <GiHealthNormal size={40} />,
    "Mayoristas": <IoPeopleSharp size={40} />,
    "Financieras": <GiCash size={40} />,
  };
  
  return iconMap[title as keyof typeof iconMap] || null;
};

const ClientCategoryCard: React.FC<{ 
  title: string; 
  isVisible: boolean; 
  href: string; 
}> = ({ title, isVisible, href }) => (
  <a
    href={href}
    aria-label="Conoce nuestros clientes"
    className={`relative flex flex-col items-center justify-center bg-opacity-90 bg-secondary text-white py-12 md:py-8 xl:py-12 rounded-lg shadow-lg hover:bg-opacity-100 transition-transform group ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`}
  >
    <div className="relative mb-4 text-white group-hover:text-primary transition-colors duration-300">
      <ClientCategoryIcon title={title} />
    </div>
    <h3 className="text-xl font-bold relative after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 group-hover:after:w-full">
      {title}
    </h3>
  </a>
);

const Clients: React.FC = () => {
  const { isVisible, ref } = useIntersectionObserver(0.2);
  const contentService = new ContentService();
  const config = AppConfigService.getInstance().getConfig();
  const clientCategories = contentService.getClientCategories();

  return (
    <Section
      ref={ref}
      id="clients-section"
      className="relative bg-cover bg-center py-10"
      style={{ backgroundImage: "url(/cam.webp)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className={`relative z-10 container mx-auto text-center text-white transition-opacity duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold mb-8">Nuestros Clientes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 sm:px-0 gap-4 sm:gap-10 xl:gap-20">
          {clientCategories.map((category, index) => (
            <ClientCategoryCard 
              key={index} 
              title={category.title} 
              isVisible={isVisible}
              href={config.socialLinks.linkedin}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Clients;