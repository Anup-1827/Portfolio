"use client"
import { motion } from 'framer-motion'
import ProjectLayout from './ProjectList'


const container = {
  hidden: {
    opacity :0
  },
  show:{
    opacity: 1,
    transition:{
      staggerChildren: 0.3,
      delayChildren: 1
    }
  }
}

function Projects({projectsData}) {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className='w-full max-w-auto max-w-2xl xl:max-w-4xl px-4 py-10 pt-20 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'>
        {
            projectsData.map((project, index)=> <ProjectLayout key={index} {...project}/>)
        }
    </motion.div>
  )
}

export default Projects