import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const Contact = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section
      id="Contact"
      ref={elementRef}
      className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white"
    >
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col items-center justify-center px-4">
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-[300] text-white pb-6 md:pb-8 lg:pb-10 m-0">
            Contact Me
          </h1>
          <h2 className="font-poppins text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl m-0 break-all text-center">
            tyseer.toufiq@mail.utoronto.ca
          </h2>
          <h2 className="font-poppins text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl m-0 mt-2 break-all text-center">
            tyseer2334@gmail.com
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
