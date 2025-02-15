"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Custom404: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center flex-grow bg-cover bg-center text-center w-full"
      style={{ backgroundImage: "url('/cam.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-lg text-white mb-6">
          La página que estás buscando no existe.
        </p>
        <button
          onClick={handleGoHome}
          className="relative px-4 py-2 bg-secondary text-xl lg:text-2xl text-zinc-300 hover:text-white transition-colors font-bebas overflow-hidden
  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[3px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
  before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-full before:h-[3px] before:bg-primary before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Custom404;
