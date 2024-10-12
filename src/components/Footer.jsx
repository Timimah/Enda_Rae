import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GiLoveMystery } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="h-fit flex justify-between items-end md:items-center mt-16 left-0 right-0 px-5 md:px-20 p-4 border border-t-primary">
      <div className="flex text-xs md:text-lg gap-4">
        <motion.a
          href="https://www.twitter.com/Enda_rae"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://www.github.com/Timimah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ba-jesujoba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          href="mailto:jblessedagboola@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail />
        </motion.a>
      </div>
      <div className="flex flex-col md:flex-row items-end  md:items-center gap-2 md:gap-4">
        <div className="text-xs">enda rae v.1 &nbsp; 2024. </div>
        <div className="flex items-center text-sm gap-1">
          <GiLoveMystery />
          <div>
            Designed & Built by{" "}
            <Link className="font-bold underline">Enda Rae</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
