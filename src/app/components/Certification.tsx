"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import certification from "@/app/assets/certification.webp";

const Certification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector("#certification-section");
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
      id="certification-section"
      className={`py-10 bg-gray-100 transition-opacity duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2>Certificaciones</h2>

        <div className="relative w-[90%] sm:w-[100%] h-auto lg:w-[900px] lg:h-[480px] group rounded-lg sm:overflow-hidden shadow-lg">
          <Image
            src={certification}
            alt="Certificación"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-16 left-0 w-full flex flex-col items-center text-center p-3">
            <div className="relative bg-secondary bg-opacity-100 sm:bg-opacity-90 text-white rounded-lg px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-transparent group-hover:border-white">
              <p className="text-xl lg:text-2xl mb-4">
              Nos complace anunciar que hemos obtenido todas las acreditaciones necesarias, reafirmando nuestro compromiso con la excelencia, la seguridad y la gestión responsable
              </p>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <a
              href="https://www.ramirezsandro.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver nuestras certificaciones"
              className="relative px-4 py-2 bg-secondary text-xl lg:text-2xl text-zinc-300 hover:text-white transition-colors font-bebas overflow-hidden
  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[3px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
  before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[3px] before:bg-primary before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
