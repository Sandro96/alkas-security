"use client";

import React, { useState, useEffect } from "react";
import { PiTableFill } from "react-icons/pi";
import { FaTruck, FaRegCreditCard } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";
import { RiDoorLockBoxFill } from "react-icons/ri";
import { IoShieldHalf } from "react-icons/io5";
import cards from "@/app/data/cardsTransport.json";

const iconMap: { [key: string]: React.ReactNode } = {
  FaTruck: <FaTruck size={40} />,
  FaRegCreditCard: <FaRegCreditCard size={40} />,
  FaMoneyBill1: <FaMoneyBill1 size={40} />,
  RiDoorLockBoxFill: <RiDoorLockBoxFill size={40} />,
  IoShieldHalf: <IoShieldHalf size={40} />,
  PiTableFill: <PiTableFill size={40} />,
};

const NationalTransport: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector("#national-transport");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="national-transport"
      className={`bg-gray-100 w-[90%] sm:w-[100%] xl:w-[50%] transition-opacity duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div>
        <h2>
          TRANSPORTAMOS VALORES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-12 xl:gap-6 2xl:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-lg shadow-xl text-center flex flex-col items-center border-zinc-400 border transition-opacity duration-500 p-4 md:p-8 xl:p-2 2xl:p-5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="https://www.ramirezsandro.com"
                className="relative mb-4 flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full group hover:bg-black"
                aria-label="Nuestros servicios"
              >
                {iconMap[card.icon]}
                <div
                  className="absolute w-20 h-20 border-4 border-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:animate-spin-from-top"
                  style={{
                    clipPath: "polygon(50% 50%, 100% 40%, 100% 100%, 40% 100%)",
                    top: "-8px",
                    left: "-8px",
                  }}
                ></div>
              </a>
              <h3 className="text-xl mb-1 tracking-normal">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationalTransport;