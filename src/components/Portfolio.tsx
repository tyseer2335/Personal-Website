import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const Portfolio = () => {
  return (
    <>
      <ProjectSection1 />
      <ProjectSection2 />
      <ProjectSection3 />
      <ProjectSection4 />
      <ProjectSection5 />
    </>
  );
};

const ProjectSection1 = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section
      id="Portfolio"
      ref={elementRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white py-20"
    >
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[300] text-white pb-8 md:pb-16 lg:pb-20 m-0 px-4">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 md:pt-16 lg:pt-24 max-w-7xl mx-auto">
          <div className="md:order-1 order-2">
            <div className="relative w-full hover-glow rounded-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full z-[2] rounded-lg"
                src="https://player.vimeo.com/video/1118489387?h=95ccbdb281"
                title="SpectraSphere Demo"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="md:order-2 order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-left pl-4 sm:pl-6 md:pl-8 lg:pl-9 font-poppins font-[200] pb-4 md:pb-6">
              <a
                href="https://github.com/tyseer2335/SpectraSphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              >
                SpectraSphere
              </a>
            </h3>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal">
              SpectraSphere is an award winning AR storytelling platform built at Hack the North 2025 using Snapchat Spectacles, Cohere, and Gemini. It transforms prompts and images into immersive 3D environments, allowing people to step inside their memories with creative styles like Ghibli, cyberpunk, or comic.
            </p>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal pt-4 md:pt-5">
              The system runs on a TypeScript web app, Node.js backend, and Lens Studio integration, creating a seamless pipeline from text to AR and bridging web with wearable tech. The project earned Snap's{' '}
              <a
                href="https://devpost.com/software/htn-zq6138"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A]"
              >
                "Spectacles AR Hackathon: Game On!" prize
              </a>
              {' '}for reimagining how stories are created and experienced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectSection2 = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section ref={elementRef} className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white py-20">
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 md:pt-16 lg:pt-24 max-w-7xl mx-auto">
          <div className="px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-left pl-4 sm:pl-6 md:pl-8 lg:pl-9 font-poppins font-[200] pb-4 md:pb-6">
              <a
                href="https://github.com/tyseer2335/World-Language-Graph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              >
                World Language Graph
              </a>
            </h3>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal">
              World-Language-Graph-3D takes data from{' '}
              <a
                href="https://www.kaggle.com/datasets/rtatman/world-atlas-of-language-structures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A]"
              >
                World Atlas of Language Structures Dataset (Kaggle)
              </a>{' '}
              and{' '}
              <a
                href="https://www.kaggle.com/datasets/rtatman/atlas-of-pidgin-and-creole-language-structures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A]"
              >
                Atlas of Pidgin and Creole Language Structures (Kaggle)
              </a>{' '}
              and combines them into a{' '}
              <a
                href="https://en.wikipedia.org/wiki/Graph_(abstract_data_type)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A]"
              >
                Graph Abstract Data Type
              </a>
              , and various graph searching algorithms are applied to generate 3D visuals on how the languages interconnect with each other.
            </p>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal pt-4 md:pt-5">
              In the demo to the right a spanning tree algorithm is applied to generate all the Languages that branched off the Germanic language family.
              Feel free to click around and play with the interactive demo (You may need to zoom out to see the Graph) Note that this is just
              a small section of the entire Language Graph, which can be viewed by clicking{' '}
              <a
                href="https://tyseer2335.github.io/World-Language-Graph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline transition-colors duration-300 hover:text-[#61677A]"
              >
                here
              </a>
            </p>
          </div>
          <div className="px-4">
            <div className="relative w-full overflow-hidden hover-glow rounded-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full z-[2] rounded-lg"
                style={{ transform: 'scale(0.6)', transformOrigin: 'center center', width: '166.67%', height: '166.67%', left: '-33.33%', top: '-33.33%' }}
                src="/assets/demo1.html"
                title="World Language Graph Demo"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectSection3 = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section ref={elementRef} className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white py-20">
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 md:pt-16 lg:pt-24 max-w-7xl mx-auto">
          <div className="md:order-1 order-2">
            <div className="relative w-full hover-glow rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/demo2.png"
                alt="Pokémon Battle Simulator Gameplay"
              />
            </div>
          </div>
          <div className="md:order-2 order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-left pl-4 sm:pl-6 md:pl-8 lg:pl-9 font-poppins font-[200] pb-4 md:pb-6">
              <a
                href="https://github.com/tyseer2335/PokemonBattleSimulator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              >
                Pokémon Battle Simulator
              </a>
            </h3>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal">
              This Pokémon Battle Simulator allows players to engage in exciting turn-based battles using various Pokémon.
              The simulator is designed to provide a realistic and engaging Pokémon battle experience, complete with different moves,
              strategies, and outcomes.
            </p>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal pt-4 md:pt-5">
              This project was developed using the{' '}
              <a
                href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A]"
              >
                Clean Architecture
              </a>{' '}
              principles for a maintainable and scalable design.
              The architecture is structured into layers and emphasizes separating out concerns. More information about how we leveraged Clean Architecture and several design
              decisions while making this project can be found by clicking{' '}
              <a
                href="https://docs.google.com/presentation/d/1PDqGYWZ6Y_l8xoNbyR7SroA73VyJT5V9e_9OKkr4S9A/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline transition-colors duration-300 hover:text-[#61677A]"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectSection4 = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section ref={elementRef} className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white py-20">
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 md:pt-16 lg:pt-24 max-w-7xl mx-auto">
          <div className="px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-left pl-4 sm:pl-6 md:pl-8 lg:pl-9 font-poppins font-[200] pb-4 md:pb-6">
              <a
                href="https://devpost.com/software/linkup-96m7x1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              >
                LinkUp
              </a>
            </h3>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal">
              LinkUp is a browser based game that allows users to walk their character in a
              virtual office environment. Users can join various video meeting rooms by moving
              their virtual avatar into a room in game, and connect to a live chat with other players
              in the game. This starts a voice and video call on the Link Up website.
            </p>
          </div>
          <div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full z-[2]"
                src="https://www.youtube.com/embed/MG7pGJezW0g"
                title="LinkUp Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectSection5 = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useFadeInOnScroll(0.2);
  useParallax(layerRef, 1.0);

  return (
    <section ref={elementRef} className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white py-20">
      <div
        ref={layerRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 md:pt-16 lg:pt-24 max-w-7xl mx-auto">
          <div className="md:order-1 order-2">
            <div className="relative w-full hover-glow rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/demo4.jpg"
                alt="Tales of Nuiryn Gameplay"
              />
            </div>
          </div>
          <div className="md:order-2 order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-left pl-4 sm:pl-6 md:pl-8 lg:pl-9 font-poppins font-[200] pb-4 md:pb-6">
              <a
                href="https://github.com/tyseer2335/GameJam2020-WON-AWARD-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-[#61677A] link-hover-glow"
              >
                Tales of Nuiryn
              </a>
            </h3>
            <p className="text-white text-left px-4 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-normal">
              Tales of Nuiryn is an epic story-driven 3D-action role-playing game.
              You embark on your journey to save a small village with your excellent
              swordsmanship and magic skills. You must fight your way through the ghosts
              in the forest to retrieve the hidden gem to save the village. Tales of Nuiryn
              was awarded the "Most Magical" prize at the University of Waterloo's 2020 Game Jam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;