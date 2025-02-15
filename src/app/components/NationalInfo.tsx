"use client";

import React, { useState } from "react";
import Image from "next/image";
import NationalTransport from "./NationalTransport";
import NationalCoverage from "./NationalCoverage";

const LazyVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleVideoLoad = () => setIsIframeLoaded(true);

  return (
    <div className="relative mx-auto w-[90%] sm:w-[80%] lg:w-[1000px] min-h-[200px] pb-[36%]">
      {!isIframeLoaded ? (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer flex items-center justify-center rounded-2xl shadow-2xl"
          onClick={handleVideoLoad}
        >
          <Image
            src="/thumbnail.webp"
            alt="Thumbnail"
            fill
            style={{ objectFit: "cover" }}
          />
          <span className="absolute bottom-20 text-gray-400 text-2xl bg-black bg-opacity-50 px-8 py-4 rounded-lg hover:text-white">
            ▶ Reproducir
          </span>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video de presentación"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

const NationalInfo: React.FC = () => {
  return (
    <section className="py-5 bg-gray-100 flex flex-col gap-14">
      <div>
        <div className="bg-secondary py-10">
          <div className="container mx-auto text-center">
            <LazyVideo videoId="9MBsATVuw2k" />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center gap-20 flex-col xl:flex-row">
        <NationalCoverage />
        <NationalTransport />
      </div>
    </section>
  );
};

export default NationalInfo;
