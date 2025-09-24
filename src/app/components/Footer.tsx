"use client";
import React from "react";
import { ContentService, AppConfigService } from "../services";
import { FooterColumn } from "../types";

const FooterColumnComponent: React.FC<{ column: FooterColumn }> = ({ column }) => (
  <div className="justify-self-center mb-5 sm:mb-0">
    <h3 className="text-xl font-bold mb-4">{column.title}</h3>
    {column.items.map((item, index) => (
      <p key={index} className="mb-2 text-xs md:text-md">
        {item}
      </p>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const contentService = new ContentService();
  const config = AppConfigService.getInstance().getConfig();
  const footerColumns = contentService.getFooterColumns();

  return (
    <footer className="bg-secondary text-white py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left">
        {footerColumns.map((column, index) => (
          <FooterColumnComponent key={index} column={column} />
        ))}
      </div>
      <div className="mt-5 text-center border-t border-gray-500 pt-4">
        <a href={config.socialLinks.linkedin} target="_blank" className="hover:text-primary">
          Sandro Ramirez | {config.companyName}
        </a>
        <p>Proyecto demostrativo</p>
      </div>
    </footer>
  );
};

export default Footer;
