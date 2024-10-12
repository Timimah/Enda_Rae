import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from '../assets/logo.png'

export const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickLink = (navItem) => {
    setActiveLink(navItem);
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
  };

  const menuItems = [
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <div className="fixed z-20 top-0 left-0 right-0 h-20 flex justify-between items-center px-5 md:px-20 bg-primary bg-opacity-5 backdrop-blur-sm">
        <ScrollLink to="hero" className="flex gap-2 logo font-extrabold text-3xl md:text-4xl h-10">
          <img src={logo} width="40"className="md:hidden object-cover" alt="" />
          <span className="hidden md:flex">Enda Rae</span>
        </ScrollLink>
        <motion.div 
          className="md:hidden rounded-full bg-black shadow-xl text-white p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 1}}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="hidden md:flex items-center md:text-lg justify-between gap-6">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={400}
              className={`hover:font-bold active:font-bold w-16 cursor-pointer ${
                activeLink === item.to ? "font-bold" : ""
              }`}
              onClick={() => clickLink(item.to)}
            >
              {item.label}
            </ScrollLink>
          ))}
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-64 h-screen bg-primary bg-opacity-5 backdrop-blur-sm z-10 flex flex-col items-start px-10 text-xl gap-6"
          >
            {menuItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={400}
                className={`hover:font-bold active:font-bold cursor-pointer ${
                  activeLink === item.to ? "font-bold" : ""
                }`}
                onClick={() => clickLink(item.to)}
              >
                {item.label}
              </ScrollLink>
            ))}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};