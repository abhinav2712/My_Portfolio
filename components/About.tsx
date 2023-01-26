import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  pageInfo:PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
     initial={{
      opacity:0
     }}
     whileInView={{opacity:1}}
     transition={{
      duration:1.5
    }}
     className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#c4c2c2] text-2xl'>About</h3>
     
      <motion.img
      initial={{
       x:-200,
       opacity:0,
      }}
      transition={{
        duration:1.2,
      }}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}   //wont do again, only once after reload
        src={urlFor(pageInfo?.profilePic).url()}
        className='-mb-20 mt-[250px] md:mt-[50px] md:mb-0 flex-shrink-0 w-[200px] h-[200px] rounded-full object-cover md:rounded-lg 
        xl:w-[300px] xl:h-[300px]'
      />   
    {/* //md:w-54 md:h-95 */}
    
       <div className='space-y-10 px-8 md:px-10'>
        <h4 className='mt-[100px] md:mt-[60px] text-3xl font-semibold md:mr-5'>Here is a {" "} <span className='underline
         decoration-[#f7ab0a]/70'>little</span>{" "} background
        </h4> 
        <p className='test-base'>
         
         {pageInfo?.backgroundInformation}
        </p>
    
       </div>
     
      </motion.div>


        )
}