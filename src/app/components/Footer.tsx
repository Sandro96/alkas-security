"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left">
        <FooterColumn
          title="OFICINA"
          items={[
            "Alkas Security",
            "Calle 1234 Montevideo - Uruguay",
            "Lunes a Viernes de 10:00hs a 18hs",
          ]}
        />
        <FooterColumn
          title="CONTACTO"
          items={["Tel: + 598 1234 56 78", "Email: ramirezsandro96@gmail.com"]}
        />
        <FooterColumn
          title="SOBRE NOSOTROS"
          items={["Objetivo y Valores", "Nuestra Historia", "Fundación"]}
        />
      </div>
      <div className="mt-5 text-center border-t border-gray-500 pt-4">
        <a href="https://www.ramirezsandro.com" target="_blank" className="hover:text-primary">
          Sandro Ramirez | Alkas Security
        </a>
        <p>Proyecto demostrativo</p>
      </div>
    </footer>
  );
};

const FooterColumn: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="justify-self-center mb-5 sm:mb-0">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    {items.map((item, index) => (
      <p key={index} className="mb-2 text-xs md:text-md">
        {item}
      </p>
    ))}
  </div>
);

export default Footer;
