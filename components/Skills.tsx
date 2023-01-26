import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';
import {Skill as SkillType} from '../typings'
type Props = {
  skills:SkillType[]
}

export default function Skills({skills}: Props) {
  return (
    <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
    //  transition={{duration:1.5}}
     
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
    min-h-screen  justify-center xl:space-y-0 mx-auto items-center'>
<h3 className=' absolute top-20 uppercase tracking-[20px] text-[#c2c2c4] text-2xl'>Skills</h3>
    <h3 className=' absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>Hover over a skill for current proficiency </h3>
  
  <div className='mt-[130px] md:mt-[100px]'>
    <div className='mt-[150px] grid grid-cols-4 gap-5 md:mt-[200px] '>

    {skills?.slice(0,skills.length/2).map((skill)=>(
      <Skill key={skill._id} skill={skill}/> 
    ))}
     
     {skills?.slice(skills.length/2,skills.length).map((skill)=>(
      <Skill key={skill._id} skill={skill} directionLeft/>
    ))}
     
    </div>
    </div>
    
    </motion.div>
  
    )
}