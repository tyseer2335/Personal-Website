import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  useParallax(layerRef, 1.0);

  return (
    <section
      id="Home"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Background video"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        ref={layerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10"
      >
        <h1 className="font-poppins text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-[120px] font-[350] m-0 text-foreground px-4 text-reveal">
          I'm Tyseer
        </h1>
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-[150] m-0 text-foreground px-4 mt-2 text-reveal-delay-1">
          A CS Student @ U of T
        </h2>
        <h3 className="font-poppins text-base sm:text-lg md:text-lg lg:text-xl font-[200] m-0 text-foreground px-4 mt-2 text-reveal-delay-2">
          Scroll Down To See More!
        </h3>
        <div className="mt-4 text-reveal-delay-2 bounce-slow">
          <ChevronDown 
            size={32} 
            className="mx-auto transition-transform duration-300 hover:translate-y-2 cursor-pointer" 
            strokeWidth={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
