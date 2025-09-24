"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const banners = [
  { src: "/branch.webp", alt: "Sucursal de Alka's Security - Oficina principal con atención personalizada", titulo: "Nuestra sucursal", descripcion: "Visítanos en nuestra sucursal para recibir atención personalizada y asesoramiento." },
  { src: "/experts.webp", alt: "Equipo de expertos en seguridad de Alka's Security - Respuesta inmediata 24/7", titulo: "Respuesta inmediata", descripcion: "Contamos con un equipo de expertos listos para atender cualquier emergencia las 24 horas del día." },
  { src: "/tecnology.webp", alt: "Tecnología de vanguardia en seguridad - Sistemas avanzados de protección", titulo: "Innovamos en seguridad", descripcion: "Implementamos tecnología de vanguardia para garantizar su protección o la de su negocio." }
];

const HeroButton: React.FC<{
  direction: "left" | "right";
  onClick: () => void;
  isDisabled: boolean;
}> = ({ direction, onClick, isDisabled }) => (
  <button
    className={`absolute top-1/2 ${
      direction === "left" ? "left-4" : "right-4"
    } transform -translate-y-1/2 bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-full z-10 hover:bg-primary transition-opacity duration-500 ${
      isDisabled ? "opacity-0" : "opacity-100"
    }`}
    onClick={onClick}
    aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    disabled={isDisabled}
  >
    {direction === "left" ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
  </button>
);

const HeroSlide: React.FC<{ banner: typeof banners[0]; isActive: boolean }> = ({
  banner,
  isActive,
}) => (
  <div
    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
      isActive ? "opacity-100" : "opacity-0"
    } bg-cover bg-center`}
    aria-hidden={!isActive}
    style={{ backgroundImage: `url(${banner.src})` }}
  >
    <div className="absolute bottom-3 w-full text-center flex flex-col items-center justify-center gap-3">
      <div className="bg-primary text-white font-bold py-3 px-7 text-xl sm:text-3xl lg:text-5xl">
        {banner.titulo}
      </div>
      <div className="bg-secondary text-white py-2 px-3 text-sm sm:text-xl lg:text-3xl">
        {banner.descripcion}
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="w-full relative" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="sr-only">Alka&apos;s Security - Servicios de Seguridad y Transporte de Valores en Uruguay</h1>
      <div className="container mx-auto flex flex-col items-center relative my-5 shadow-[0px_0px_5px_5px_rgba(0,_0,_0,_0.3)]">
        <HeroButton direction="left" onClick={goToPrevious} isDisabled={isTransitioning} />
        <div
          className="relative overflow-hidden w-full h-[271px] sm:h-[325px] md:h-[433px] lg:h-[542px] xl:h-[650px] 2xl:h-[650px]"
          role="region"
          aria-live="polite"
        >
          {banners.map((banner, index) => (
            <HeroSlide key={index} banner={banner} isActive={index === currentIndex} />
          ))}
        </div>
        <HeroButton direction="right" onClick={goToNext} isDisabled={isTransitioning} />
      </div>
    </section>
  );
};

export default Hero;