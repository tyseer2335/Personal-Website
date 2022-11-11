import Navbar from "./components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Video from "./components/Video";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./Contact";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b bg-black">
      <Parallax pages={6} speed={1.25} offset={3} factor={3}>
        <ParallaxLayer>
          {/* <Navbar /> */}
          <Video />
          <p className="text-s text-white p-3 hover:text-slate-300 text-center ">
            <a
              href="https://github.com/tyseer2335/Sketchbook-Animator"
              target="_blank"
            >
              Cool Background? Create your Own!{" "}
            </a>
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          offset={1}
          factor={3}
          class="decoration-solid text-center text-7xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,224L48,186.7C96,149,192,75,288,85.3C384,96,480,192,576,213.3C672,235,768,181,864,149.3C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <About />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,32L48,69.3C96,107,192,181,288,181.3C384,181,480,107,576,85.3C672,64,768,96,864,122.7C960,149,1056,171,1152,154.7C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>

          <ParallaxLayer pages={1} speed={1} offset={2} factor={3}>
            <Projects />{" "}
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          offset={4}
          factor={3}
          class="decoration-solid text-center text-7xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,256L48,213.3C96,171,192,85,288,69.3C384,53,480,107,576,154.7C672,203,768,245,864,224C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <Resume />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,256L48,218.7C96,181,192,107,288,96C384,85,480,139,576,181.3C672,224,768,256,864,245.3C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          offset={5}
          factor={3}
          class="decoration-solid text-center text-7xl"
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
