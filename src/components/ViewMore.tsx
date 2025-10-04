import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ViewMore = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section ref={elementRef} className="relative h-screen flex flex-col items-center justify-center text-center bg-white text-black">
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl pb-8 sm:pb-12 md:pb-16 font-poppins">View More</h1>
          <div className="flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-4">
            <a
              href="https://github.com/tyseer2335"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} className="text-7xl sm:text-8xl md:text-8xl" />
            </a>
            <a
              href="https://devpost.com/tyseer2334"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              aria-label="Devpost Profile"
            >
              <FontAwesomeIcon icon={faCode} className="text-7xl sm:text-8xl md:text-8xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/tyseer-toufiq-a3b8b11aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-7xl sm:text-8xl md:text-8xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewMore;
