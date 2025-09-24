import React from 'react';
import Image from 'next/image';
import { HeroButtonProps, HeroSlideProps, LazyVideoProps } from '../../types';

// ===== BUTTON COMPONENT =====
export const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '', 
  ariaLabel,
  type = 'button'
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={className}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

// ===== HERO BUTTON COMPONENT =====
export const HeroButton: React.FC<HeroButtonProps> = ({ 
  direction, 
  onClick, 
  isDisabled 
}) => (
  <Button
    onClick={onClick}
    disabled={isDisabled}
    ariaLabel={direction === "left" ? "Anterior" : "Siguiente"}
    className={`absolute top-1/2 ${
      direction === "left" ? "left-4" : "right-4"
    } transform -translate-y-1/2 bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-full z-10 hover:bg-primary transition-opacity duration-500 ${
      isDisabled ? "opacity-0" : "opacity-100"
    }`}
  >
    {direction === "left" ? "←" : "→"}
  </Button>
);

// ===== HERO SLIDE COMPONENT =====
export const HeroSlide: React.FC<HeroSlideProps> = ({ 
  banner, 
  isActive 
}) => (
  <div
    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
      isActive ? "opacity-100" : "opacity-0"
    } bg-cover bg-center`}
    aria-hidden={!isActive}
    style={{ backgroundImage: `url(${banner.src})` }}
  >
    <div className="absolute bottom-3 w-full text-center flex flex-col items-center justify-center gap-3">
      <div className="bg-primary text-white font-bold py-3 px-7 text-xl sm:text-3xl lg:text-5xl">
        {banner.titulo}
      </div>
      <div className="bg-secondary text-white py-2 px-3 text-sm sm:text-xl lg:text-3xl">
        {banner.descripcion}
      </div>
    </div>
  </div>
);

// ===== LAZY VIDEO COMPONENT =====
export const LazyVideo: React.FC<LazyVideoProps> = ({ 
  videoId, 
  thumbnailSrc = "/thumbnail.webp",
  thumbnailAlt = "Video de presentación"
}) => {
  const [isIframeLoaded, setIsIframeLoaded] = React.useState(false);

  const handleVideoLoad = () => setIsIframeLoaded(true);

  return (
    <div className="relative mx-auto w-[90%] sm:w-[80%] lg:w-[1000px] min-h-[200px] pb-[36%]">
      {!isIframeLoaded ? (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer flex items-center justify-center rounded-2xl shadow-2xl"
          onClick={handleVideoLoad}
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1000px"
          />
          <span className="absolute bottom-20 text-gray-400 text-2xl bg-black bg-opacity-50 px-8 py-4 rounded-lg hover:text-white">
            ▶ Reproducir
          </span>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={thumbnailAlt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

// ===== SECTION COMPONENT =====
export const Section = React.forwardRef<HTMLElement, {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabelledBy?: string;
  style?: React.CSSProperties;
}>(({ id, className = '', children, ariaLabelledBy, style }, ref) => (
  <section 
    ref={ref}
    id={id} 
    className={className}
    aria-labelledby={ariaLabelledBy}
    style={style}
  >
    {children}
  </section>
));

Section.displayName = 'Section';

// ===== CONTAINER COMPONENT =====
export const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`container mx-auto ${className}`}>
    {children}
  </div>
);
