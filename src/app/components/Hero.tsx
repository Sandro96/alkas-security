"use client";

import React from "react";
import { HeroButton, HeroSlide, Section, Container } from "./ui";
import { useCarousel } from "../hooks";
import { ContentService } from "../services";

const Hero: React.FC = () => {
  const contentService = new ContentService();
  const banners = contentService.getBanners();
  const { currentIndex, isTransitioning, goToPrevious, goToNext } = useCarousel(banners.length);

  return (
    <Section className="w-full relative" ariaLabelledBy="hero-heading">
      <h1 id="hero-heading" className="sr-only">
        Alka&apos;s Security - Servicios de Seguridad y Transporte de Valores en Uruguay
      </h1>
      <Container className="flex flex-col items-center relative my-5 shadow-[0px_0px_5px_5px_rgba(0,_0,_0,_0.3)]">
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
      </Container>
    </Section>
  );
};

export default Hero;