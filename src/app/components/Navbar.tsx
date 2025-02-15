"use client";
import React from "react";

interface MenuItemProps {
  label: string;
  href: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => (
  <a
    href={href}
    className="font-normal text-zinc-300 hover:text-white font-bebas text-xl xl:text-3xl relative after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-[-1px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
  >
    {label}
  </a>
);

const Navbar: React.FC = () => {
  const menuItems = [
    { label: "Nosotros", href: "#la-empresa" },
    { label: "Servicios", href: "#servicios" },
    { label: "Tecnologías", href: "#tecnología" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="hidden md:block bg-secondary py-3">
      <div className="container mx-auto flex justify-center space-x-8">
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} href={item.href} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;