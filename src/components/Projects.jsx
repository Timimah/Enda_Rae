import React from 'react'
import { ProjectsSlider } from './ProjectsSlider'
import { motion } from 'framer-motion'

export const Projects = ({id}) => {
  return (
    <motion.div id={id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
>
    <div className='text-5xl md:text-6xl text-center flex w-full justify-center pb-16 font-bold'>Projects</div>
        <div className=''>
        <ProjectsSlider />
        </div>
    </motion.div>
  )
}
