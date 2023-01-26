import React from 'react'
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  experience: Experience[]
}

export default function ExperienceCards({ experience}: Props) {
  return (
    <div>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        w-[500px] md:w[10px] md:mt-[25px] xl:w-[400px] snap-center bg-[#2b125f] p-10 hover:opacity-100
        opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            initial={{y:-100,
            opacity:0}}
            transition={{
                duration:1.2
            }}
            whileInView={{
                opacity:1,y:0
            }}
            viewport={{
                once:true
            }}

            className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
            // src="https://lh3.googleusercontent.com/Xidk5jiWaehhnKm5UugYzIP4dIXhzPkZJeU1v_ywIAC3rZZ8MlJf-A_JwEkwm8jNg4Jtfn55W16VXpFxOzgxSxg7VvX7vApBuuFfYRVLcAJDl9Rmr0WJvT0gm2jCrVANfkIOmnLVN5Cs8YecnIh7FHo_lDeFNJpm7relrN7EPuJVObhh4MJHSne2OUSI9Z62d9avw9lvcK92hiKlSTNFY3CTrrGHI1h-YSjmzdPEsFtn3ySKWsSBHXNA5uAEyc6AprE5sMjeRxfcR9bvH9UR9obH91Q5v6huB0yUM4m4VANfR9j4e-JFkEYc9fJTXMeGNpokEV3sYOXBZSXFSM-6cb3utZKWyv-FI5MDK4RbV41EjoEsHNaccNXWcwfH5eBeMXyBIjKKQs2tHlFcpPk5ZAvjpu0tfvZjild93yS3vLUPMpsYmFULwJ_mKOttKHZo3Us3p4VprT1dEcZagjg0tDO3jpkr-k1nitFjoQXoeCmluZVx2U994QnUSgZtT8ZC5yUdJHvCbqnssqqvOktJ0MNDWJlAR466dw1Pk1ndrBDbrdJzTeLdU0bKfEKI_szYwbxn2sIg3cP0D-h7n1ZQ77lys-TPJbhQebdDqH3VldKBk2OzSQ11X45pgbq_Vcs9vtg5KTulTLRpkxPsrcv_8MOqyZMzM0dDS20rk88-sooVyIf6z2NYvlRMg5rXG64Z5RESpdm9-Wdjrbvx9sskiIc7RvzvtR6Kc3WvM2kO3yvQ4k-Py-Z54n5RZ1OEotWDS2BHTuHyh824yHDBrvom5-wcLHRbFryu_ARrkIWC3uTZe_uN-lYTgt8VHAbAJtesfIdFvXnfiF_piWYb0QEOREE3WwJ5sEO7twGpOu2ZKmmAPMNOBrop6bxDudcrIENY4XWq1fLSBLDdH4dsba1VODwZ9QRNfhAZy4sVljhiBypflszS-H2f1o6GQLVim8h0pMQUJVvEKTs=w678-h627-no?authuser=0"  
           src={urlFor(experience?.companyImage).url()}
            alt=""
             />
          <div className='px-0 md:px-10'>
            <h4 className='text-3xl md:mt-[-15px] font-light '>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2  '>

             {/* <img className='h-10 w-10 rounded-full'
             src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"
             />
             <img className='h-10 w-10 rounded-full'
             src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"
             />
             <img className='h-10 w-10 rounded-full'
             src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"
             /> */}
            {experience?.technologies.map((technology) => (
              <img 
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(technology.image).url()}
           />
            ))}
            </div>

            <p className='uppercase md:mt-[-20px] py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 
               "Present" :
                new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-0.2 ml-5 text-lg '>

                               {/* 3:33:13 */}
              
              {experience.points.map((point,i)=>(
                <li key={i}>{point}</li>
              ))}
        
            </ul>
          </div>
         


        </article>
    </div>
  )
}