"use client";
import React from "react";
import { NavigationService } from "../services";
import { MenuItem } from "../types";

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => (
  <a
    href={item.href}
    className="font-normal text-zinc-300 hover:text-white font-bebas text-xl xl:text-3xl relative after:absolute after:w-0 after:h-[3px] after:bg-primary after:bottom-[-1px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
  >
    {item.label}
  </a>
);

const Navbar: React.FC = () => {
  const navigationService = new NavigationService();
  const menuItems = navigationService.getMenuItems();

  return (
    <nav className="hidden md:block bg-secondary py-3">
      <div className="container mx-auto flex justify-center space-x-8">
        {menuItems.map((item, index) => (
          <MenuItemComponent key={index} item={item} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;