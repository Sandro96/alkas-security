"use client";

import React from "react";
import NationalTransport from "./NationalTransport";
import NationalCoverage from "./NationalCoverage";
import { LazyVideo, Section, Container } from "./ui";

const NationalInfo: React.FC = () => {
  return (
    <Section id="la-empresa" className="py-5 bg-gray-100 flex flex-col gap-14">
      <h2 className="sr-only">Información Corporativa de Alka&apos;s Security</h2>
      <div>
        <div className="bg-secondary py-10">
          <Container className="text-center">
            <LazyVideo 
              videoId="9MBsATVuw2k" 
              thumbnailAlt="Video de presentación de Alka's Security - Servicios de seguridad y transporte de valores"
            />
          </Container>
        </div>
      </div>
      <Container className="flex justify-center gap-20 flex-col xl:flex-row items-center">
        <NationalCoverage />
        <NationalTransport />
      </Container>
    </Section>
  );
};

export default NationalInfo;