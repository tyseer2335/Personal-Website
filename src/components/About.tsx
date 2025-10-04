import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const About = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section
      id="About"
      ref={elementRef}
      className="relative h-screen flex flex-col items-center justify-center text-center bg-white text-black"
    >
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <h1 className="font-poppins text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-[300] text-black m-0 px-4">
          About Me
        </h1>
        <h2 className="font-poppins text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-[300] text-black pt-8 md:pt-12 lg:pt-16 px-4 sm:px-8 md:px-16 lg:px-20 m-0 max-w-6xl mx-auto">
          I am currently in my third year at the University of Toronto St George, studying Computer Science, Mathematics
          and Statistics. Outside of academics, I enjoy reading, working out, and playing
          Football (Soccer). I love to learn new things, even outside of the classroom, and aspire to become multilingual and travel the
          world one day! Feel free to scroll to the end of this website to contact me, or check what I have been up to on my portfolio.
        </h2>
      </div>
    </section>
  );
};

export default About;
