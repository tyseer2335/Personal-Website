import React from "react";
import gameJam from "../assets/winners.jpg";
import filter from "../assets/filter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  return ( 
    <div className=" py-48">
    <div class="row" > 
    <h1 className="text-6xl text-white">Projects</h1>
    </div>
      <div className="text-white text-left text-4xl p-16 pt-90">
        <div class="row">
          <div class="column">
            <h1>
              <p className=" hover:text-slate-300">
                <a
                  href="https://docs.google.com/document/d/1rzWouZxItlMM0pOlzyfl_OXndIR5Pa8iAdvgcEJ-lfA/edit?usp=sharing"
                  target="_blank"
                >
                  Hush
                </a>
              </p>
            </h1>
            <p className="text-white text-left text-2xl p-6 ">
            Hush is a business concept that serves as an accessory to headphones.  
            Utilizing Husmods allows users to integrate active noise canceling with any pair of  
            headphones, tackling the problem of ambient noise. Hush was 
             ranked as one of the global finalists in the Diamond Challenge 2020 International Summit,  
             in Newark Delaware, alongside receiving over $500 in seed funding. Click on the video on the left to  
             see Hush’s business pitch, or click the title to read the business report.  
            </p>
          </div>
          <div className="">
            <iframe
              width="620"
              height="400"
              src="https://www.youtube.com/embed/3-kOhQ98iE8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="py-24"></div>
        <div class="row">
          <div class="columnReverse">
            <h1>
              <p className=" hover:text-slate-300">
                <a
                  href="https://devpost.com/software/linkup-96m7x1"
                  target="_blank"
                >
                  LinkUp  
                 
                </a>
              </p> 
              <p className="p-2 text-xl">Express.JS, Socket.io, PeerJS, WebRTC, Unity, WebGL</p>
            </h1>
            <p className="text-white text-left text-2xl p-6">
            LinkUp is a browser based game that allows users to walk their character in a virtual office environment. 
             Users can join various video meeting rooms by moving their virtual avatar into a room in game, and connect  
             to a live chat with other players in the game. This starts a voice and video call on our very own Link Up  
             website, with your own room ID, bringing back an office environment in a virtual space. 
            </p>
          </div>
          <div className="">
            <iframe
              width="620"
              height="400"
              src="https://www.youtube.com/embed/MG7pGJezW0g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="py-24"></div>
        <div class="row">
          <div class="column">
            <h1>
              <p className=" hover:text-slate-300">
                <a
                  href="https://devpost.com/software/courseify"
                  target="_blank"
                >
                  Courseify
                </a>
              </p> 
              <p className="p-2 text-xl">Express.JS, HTML/CSS/JS, Bootstrap, SerpWow Api</p>
            </h1>
            <p className="text-white text-left text-2xl p-6">
            Courseify strives to improve students' learning by creating a platform where they can have access to both  
            instructional materials as well as a wide range of other practice questions and other practice material for 
             a topic of their choice. Through scraping the internet Courseify finds the perfect set of materials and  
             amalgamates everything to semantically generate a crash course.
            </p>
          </div>
          <div className="">
            <iframe
              width="620"
              height="400"
              src="https://www.youtube.com/embed/c6SXvQqnvfY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="py-24"></div>
        <div class="row">
          <div class="columnReverse">
            <p className=" hover:text-slate-300">
                <a
                  href="https://github.com/FarzadR-Dev/GameJam2020-WON-AWARD-"
                  target="_blank"
                >
                  Tales of Nuiryn
                </a>
              </p>  
              <p className="p-2 text-xl">Unity, C#</p>
            <p className="text-white text-left text-2xl p-6">
            Tales of Nuiryn is an epic story-driven 3D-action role-playing game. You embark on your journey  
            to save a small village with your excellent swordsmanship and magic skills. You must fight your 
             way through the ghosts in the forest to retrieve the hidden gem to save the village. Tales of  
             Nuiryn was awarded the “Most Magical” prize at the University of Waterloo’s 2020 Game Jam.
            </p>
          </div>
          <div className="pt-6">
            <img src={gameJam} alt="JameGam" width="620" height="400" />
          </div>
        </div>
        <div className="py-24"></div>
        <div class="row">
          <div class="column">
            <h1>
              <p className=" hover:text-slate-300">
                <a
                  href="https://devpost.com/software/safespace-7bdesv"
                  target="_blank"
                >
                  SafeSpace
                </a>
              </p> 
              <p className="p-2 text-xl">React, Tensorflow.JS, Firebase</p>
            </h1>
            <p className="text-white text-left text-2xl p-6">
            Safespaces is a community where people can give and get advice about issues and  
            topics related to mental health. A person signs up and creates a profile and has two options. 
             One option a person has is to create a post about an issue related to mental health and the  
             second option is to respond to other people’s posts and share advice and kind words. Unlike other 
              websites such as Reddit, Safespace uses Machine Learning to filter out toxic and harmful posts, 
               ensuring a safe community for everyone while providing you with the best quality counseling online.
            </p>
          </div>
          <div className="pt-20">
          <iframe width="620" 
           height="400" src="https://www.youtube.com/embed/aDdDIs_ji-4"  
           title="YouTube video player" frameborder="0"  
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
           allowfullscreen></iframe>
          </div>
        </div>
        <div>
          <h1 className="pt-28 text-center pt-44">
            View More
            <ul>
              <li className="pt-12">
                <a
                  href="https://github.com/tyseer2335"
                  className="hover:text-slate-300"
                  target="_blank"
                >
                  <FontAwesomeIcon size="3x" icon={faGithub} className="p-8" />
                </a>
                <a
                  href="https://devpost.com/tyseer2334?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  className="hover:text-slate-300"
                  target="_blank"
                >
                  <FontAwesomeIcon size="3x" icon={faCode} className="p-8" />
                </a>
              </li>
            </ul>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
