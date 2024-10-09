import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="flex justify-between px-20 mx-20 items-center my-16 h-36 bg-gray-900/40 shadow-xl rounded-lg backdrop-blur">
        <div className="text-6xl text-center font-bold">Like my work?</div>
        <motion.div
          className="custom-button text-xl font-bold p-4 px-6"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.08, transition: 0.3 }}
        >
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:jblessedagboola@gmail.com";
              e.preventDefault();
            }}
          >
            Get In Touch!
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
