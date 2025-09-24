"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import IconExtend from "@/app/assets/icon-extend.svg";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="relative w-full border-b-2 bg-white z-50">
      <div className="flex justify-between items-center p-3 container mx-auto">
        <Link href="/" className="flex items-center">
          <Image 
            src={IconExtend} 
            alt="Alka's Security - Servicios de Seguridad y Transporte de Valores en Uruguay" 
            height={48}
            priority
            loading="eager"
          />
        </Link>

        <div className="flex items-center gap-5 text-center">
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.ramirezsandro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-black hover:scale-110 transition-transform"
              aria-label="Visitanos en Instagram"
            >
              <RiInstagramFill size={30} />
            </a>
            <a
              href="https://www.ramirezsandro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-black hover:scale-110 transition-transform"
              aria-label="Visitanos en Facebook"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://www.ramirezsandro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-black hover:scale-110 transition-transform"
              aria-label="Visitanos en LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          <a
            href="https://www.ramirezsandro.com"
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

      {isMenuOpen && (
        <>
          <div className="absolute top-full left-0 w-full bg-secondary text-white py-5 px-3 z-40">
            <ul className="space-y-4">
              {[
                "Nosotros",
                "Servicios",
                "Tecnologías",
                "Clientes",
                "Contacto",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-zinc-300 hover:text-white font-bebas text-xl relative after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-[-1px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={toggleMenu}
            className="fixed top-[56px] left-0 w-full h-full bg-black bg-opacity-50 z-30"
          ></div>
        </>
      )}
    </div>
  );
};

export default Header;
