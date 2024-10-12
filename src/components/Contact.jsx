import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="contact my-16 px-8 md:px-20"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="bg-black/60 flex flex-col md:flex-row justify-between md:items-center rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="md:w-2/3 flex flex-col">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Like what you see?
          </motion.h2>
          <motion.p
            className="text-sm md:text-lg text-white mb-8"
            variants={itemVariants}
          >
            I'm always excited to collaborate on new projects and bring
            innovative ideas to life. Whether you have a specific project in
            mind or just want to explore possibilities, I'd love to hear from
            you!
          </motion.p>
        </div>
        <motion.div variants={itemVariants} className="inline-block">
          <motion.button
            className="border border-white hover:border-black text-white custom-button font-bold py-3 px-6 rounded-lg text-lg md:text-xl shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.08, transition: 0.3 }}
          >
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:jblessedagboola@gmail.com";
                e.preventDefault();
              }}
              className="flex items-center"
            >
              Get In Touch
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
