import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-black py-48">
      <h1 className=" text-center text-white">
        Contact Me
        <ul>
          <li className="pt-12">
            {/* <a
              href="https://www.linkedin.com/in/tyseer-toufiq-a3b8b11aa/"
              className="hover:text-gray-900 text-white"
              target="_blank"
            >
              <FontAwesomeIcon size="lg" icon={faLinkedin} className="p-8" />
            </a>
            <a
              href="https://devpost.com/tyseer2334?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              className="hover:text-slate-300"
              target="_blank"
            >
              <FontAwesomeIcon size="lg" icon={faEnvelope} className="p-8" />
            </a> */}
          </li>
        </ul>
        <p className="text-xl pt-5">tyseer2334@gmail.com</p>
        <p className="text-xl pt-4">tyseer.toufiq@mail.utoronto.ca</p>
        <p className="text-xl pt-4">(226) 505 9717</p>
      </h1>
    </div>
  );
};

export default Contact;
