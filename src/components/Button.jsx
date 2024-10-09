import React from "react";
import { motion } from "framer-motion";

export const Button = ({
  btnStyles,
  click,
  label,
  btnLabelStyles,
  children,
  type,
  disable,
}) => {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.9 }}
      onClick={click}
      className={`${btnStyles} flex items-center justify-center place-items-center`}
      disabled={disable}
    >
      {children}
      <div className={`${btnLabelStyles} text-center flex items center gap-2 my-auto`}>{label}</div>
    </motion.button>
  );
};