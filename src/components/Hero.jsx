import React from 'react'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className='page flex flex-col sticky top-0 h-screen md:h-[40em] bottom-0 justify-center text-left mx-10 md:mx-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-4xl text-left'
      >
        Hi, I'm
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='text-8xl md:text-9xl'
      >
        Enda Rae.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className='font-extrabold text-4xl md:text-7xl'
      >
        FRONTEND DEVELOPER.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className='text-xl'
      >
        I excel at building exceptional digital experiences.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className='flex justify-end absolute bottom-0 right-0 text-sm w-full'
      >
        enda rae v.1
      </motion.div>
    </div>
  )
}