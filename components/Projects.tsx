import React from 'react'
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';
type Props = {
 projects:Project[]
}

export default function Projects({projects}: Props) {
  
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

    className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3  className=' absolute top-24 uppercase tracking-[20px] text-[#c2c2c4] text-2xl'>Projects</h3>
        <h3 className=' absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>Swipe Right to view more {"-->"} </h3>
  
    <div className='  relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
    z-20 '>
      {projects?.map((project,i)=>(
        <div className='md:w-[640px] md:h-[650px] md:mt-[1000px]'>
        <div className='mt-[130px] md:-mt-[400px] w-[400px] h-[400px]  md:w-[650px] md:h-[650px] flex-shrink-0 snap-center flex flex-col space-y-5 items-center
        justify-center p-20 md:p-44  '>
        <motion.img
        initial={{
          y:-300,
          opacity:0
        }}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.2}}
        viewport={{once:true}}

        src={urlFor(project?.image).url()}
        
        />
        
        <div>
            <h4 className='text-1xl text-center font-semibold'>
            <span className="underline decoration-[#2b125f]/30">Case Study of {i+1} of {projects.length}:</span> {" "}
            {project?.title}
            </h4></div>
           <p className='text-sm text-center md:text-left'>
            {project?.summary}
           </p>
        </div>
        </div>
      ))}
    </div>

    <div className='w-full absolute top-[30%] bg-[#2b125f]/30 left-0 h-[300px] -skew-y-12'/>
    </motion.div>
  )
}