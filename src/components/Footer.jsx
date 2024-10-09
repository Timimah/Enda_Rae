import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { GiLoveMystery } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="h-fit flex justify-between items-center mt-16 left-0 right-0 px-20 p-4 border border-t-primary">
      <div className="flex gap-4">
        <motion.a>
          <FaTwitter />
        </motion.a>
        <motion.a>
          <FaGithub />
        </motion.a>
        <motion.a>
          <FaLinkedinIn />
        </motion.a>
        <motion.a>
          <IoIosMail />
        </motion.a>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-xs">enda rae v.1 &nbsp; 2024. </div>
        <div className="flex items-center gap-1">
          <GiLoveMystery />
          <div>
            Designed & Built by <Link className="font-bold underline">Enda Rae</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
