"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import departments from "@/app/data/departments.json";

const NationalCoverage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % departments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = document.querySelector("#national-coverage");
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

  const currentDepartment = departments[currentIndex];

  if (!currentDepartment) {
    return null;
  }

  return (
    <section
      id="national-coverage"
      className={`w-[90%] sm:w-[100%] xl:w-[50%] transition-opacity duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div>
        <div className="w-full">
          <h2>
            Llegamos a todo el territorio Nacional
          </h2>
          <div className="relative flex flex-col items-center">
            <div className="w-full mb-4">
              <Image
                src={currentDepartment.image}
                alt={`Image of ${currentDepartment.name}`}
                width={800}
                height={450}
                className="w-full rounded-lg transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalCoverage;
