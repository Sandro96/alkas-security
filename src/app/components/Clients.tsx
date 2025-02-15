"use client";

import React, { useEffect, useState } from "react";
import { FaUniversity, FaShoppingCart, FaShip, FaExchangeAlt } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { GiCash, GiHealthNormal } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";

const Clients: React.FC = () => {
  const categories = [
    { icon: <FaUniversity size={40} />, title: "Bancos" },
    { icon: <FaShoppingCart size={40} />, title: "Supermercados" },
    { icon: <FaShip size={40} />, title: "Navieras" },
    { icon: <FaExchangeAlt size={40} />, title: "Cambios" },
    { icon: <RiGovernmentFill size={40} />, title: "Entes Públicos" },
    { icon: <GiHealthNormal size={40} />, title: "Mutualistas" },
    { icon: <IoPeopleSharp size={40} />, title: "Mayoristas" },
    { icon: <GiCash size={40} />, title: "Financieras" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector("#clients-section");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
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
        <h2>Nuestros Clientes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 sm:px-0 gap-4 sm:gap-10 xl:gap-20">
          {categories.map((category, index) => (
            <a
              key={index}
              href="https://www.ramirezsandro.com"
              aria-label="Conoce nuestros clientes"
              className={`relative flex flex-col items-center justify-center bg-opacity-90 bg-secondary text-white py-12 md:py-8 xl:py-12 rounded-lg shadow-lg hover:bg-opacity-100 transition-transform group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="relative mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold relative after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 group-hover:after:w-full">
                {category.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;