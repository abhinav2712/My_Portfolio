import React from 'react'
import { motion } from "framer-motion";
import ExperienceCards from './ExperienceCards';
import { Experience } from '../typings';
type Props = { experience: Experience[]}

export default function WorkExperience({experience}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}

    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-20 uppercase tracking-[20px] text-[#c2c2c4] text-2xl'>
            Experience
        </h3>
        <h3 className=' absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>Swipe Right using touchpad to view more --> </h3>
        <div className='mt-[130px] md:mt-[300px] w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
        snap-mandatory scrollbar scrollbar-track-grey-400/20 scroll-thumb-[#f7ab0a]/80'>
{/*        
        <ExperienceCards/>
        <ExperienceCards/>
        <ExperienceCards/> */}

       {experience?.map((experience)=>(
        <ExperienceCards key={experience._id} experience={experience}/>
       ))}


        </div>
    </motion.div>

  )
}