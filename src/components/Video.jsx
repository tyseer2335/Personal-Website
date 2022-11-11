import React from "react";
import testVid from "../assets/testvid.mp4"

const Video = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={testVid} autoPlay loop muted />
      <div className="content pt-10">
        <h1 className="text-9xl text-black p-10">I'm Tyseer</h1>
        <p className="text-3xl text-black p-3 ">A CS Student @ U of T</p>
        <p className="text-xl text-black p-2 font-semibold">Scroll Down To See More!</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill=""
            fill-opacity="1"
            d="M0,0L48,5.3C96,11,192,21,288,64C384,107,480,181,576,208C672,235,768,213,864,176C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Video;
