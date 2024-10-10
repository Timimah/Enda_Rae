import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [navClicked, setNavClicked] = useState(false);

  const clickLink = (navItem) => {
    setActiveLink(navItem);
  };

  return (
    <div className="fixed z-20 top-0 left-0 right-0 h-20 flex justify-between items-center px-20 bg-primary bg-opacity-5 backdrop-blur-sm">
      <ScrollLink to="hero" className="logo font-extrabold text-4xl h-10 ">
        Enda Rae
      </ScrollLink>
      <div className="flex items-center text-lg justify-between gap-6">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={400}
          className={`hover:font-bold active:font-bold w-16 cursor-pointer ${
            activeLink === "projects" ? "font-bold" : ""
          }`}
          onClick={() => clickLink("projects")}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={300}
          className={`hover:font-bold active:font-bold w-16 cursor-pointer ${
            activeLink === "skills" ? "font-bold" : ""
          }`}
          onClick={() => clickLink("skills")}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={300}
          className={`hover:font-bold active:font-bold w-16 cursor-pointer ${
            activeLink === "about" ? "font-bold" : ""
          }`}
          onClick={() => clickLink("about")}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={300}
          className={`hover:font-bold active:font-bold w-16 cursor-pointer ${
            activeLink === "contact" ? "font-bold" : ""
          }`}
          onClick={() => clickLink("contact")}
        >
          Contact
        </ScrollLink>
        <motion.div
          className={`custom-button border border-black hover:font-bold p-2 px-4 ${
            activeLink === "resume" ? "font-bold" : ""
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.08, transition: 0.3 }}
          onClick={() => {
            clickLink("resume");
            window.open(
              "https://drive.google.com/file/d/1w6hLoNBoCyXrwIEdkjGPhj45PgRaa-jo/view"
            );
          }}
        >
          <ScrollLink to="resume" smooth={true} className="flex-grow">
            Resume
          </ScrollLink>
          <MdOpenInNew className="ml-2" />
        </motion.div>
      </div>
    </div>
  );
};
