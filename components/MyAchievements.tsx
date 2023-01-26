import React from 'react'
import { motion } from "framer-motion";
import AchievementCards from './AchievementCards'
type Props = {}

export default function MyAchievements({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}

    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-[#c2c2c4] text-2xl'>
            Achievements
        </h3>

        <div className='mt-[130px] md:mt-[200px] w-full flex space-x-5 overflow-x-scroll p-10 snap-x
         snap-mandatory scrollbar scrollbar-track-grey-400/20 scroll-thumb-[#f7ab0a]/80'>
        <AchievementCards/>
        <AchievementCards/>
        <AchievementCards/>
      

        </div>
    </motion.div>

  )
}