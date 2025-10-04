import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';

const Section2 = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  useParallax(layerRef, 1.0);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white">
      <div
        ref={layerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <p className="text-white text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl m-0 px-4">
          <a
            href="https://github.com/tyseer2335/Sketchbook-Animator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300 hover:text-[#61677A]"
          >
            Cool Background?
            <br />
            Click Here to Create your Own!
          </a>
        </p>
      </div>
    </section>
  );
};

export default Section2;
