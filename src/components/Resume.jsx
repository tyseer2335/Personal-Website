import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
  return (
    <div className="bg-white py-48">
      <h1 className="text-6xl ">My Resume</h1>
      <ul>
        <li className="pt-12">
          <a
            href="https://drive.google.com/file/d/1uzI7fxIZw4m70Nfo7RvwogwXvmKV-m3W/view?usp=sharing"
            className="hover:text-gray-900 text-black"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faFile} className="p-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/tyseer-toufiq-a3b8b11aa/"
            className="hover:text-gray-900 text-black"
            target="_blank"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedin} className="p-8" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resume;
