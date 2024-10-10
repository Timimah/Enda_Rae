import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdArrowDropright } from "react-icons/io";

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <motion.button
        className="flex items-center w-fit font-semibold mb-1 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <IoMdArrowDropright />
        </motion.span>
        {title}
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <motion.div
              variants={{ collapsed: { y: -10 }, open: { y: 0 } }}
              transition={{ duration: 0.3 }}
              className="pl-5"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};