import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
// import MyAchievements from '../components/MyAchievements'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience,PageInfo,Project,Skill,Social } from '../typings'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSocial } from '../utils/fetchSocials'


type Props={
  pageInfo:PageInfo[];
  experiences:Experience[];
  skills:Skill[];
  projects:Project[];
  socials:Social[];
  // achievements:Achievement[];     // potential error, replace the tags if not working
}

const Home = ({pageInfo,experiences,projects,skills,socials}:Props) => {
  return (
    <div className="bg-[rgb(0,8,56)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-grey-400/20 scroll-thumb-[#f7ab0a]/80 ">
      <Head>
        <title>Abhinav's Profile</title>
      </Head>

      <Header socials={socials}/> 

      <section id="hero" className='snap-start'>
      <Hero pageInfo={pageInfo}/>
      </section>
      
      <section id='about' className='snap-center'>
      <About pageInfo={pageInfo}/>
      </section>
      <br/><br/>
     <br/><br/>
      <section id='exp' className='snap-start'>  
      <WorkExperience experience={experiences}/>
      </section>
     <br/><br/>
     <br/><br/>
     <br/><br/>
     <br/><br/>
     <br/><br/>
     


      <section id='skills' className='snap-center'>  
      <Skills skills={skills}/>
      </section>
     <br></br>
      <section id='projects' className='snap-start'> 
        <Projects projects={projects}/>
      </section>

      {/* <section id='achievements' className='snap-start'>  
      <MyAchievements/>
      </section> */}


      {/* Contact me */}
      <br/><br/>
     <br/><br/>
     
      <section id='contacts' className='snap-end '>  
      <ContactMe/>
      </section>

{/* <Link href="#top">
<footer className='sticky bottom-5 width-full cursor-pointer'>
  <div>
    <img></img>
  </div>

</footer>
</Link> */}

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
const pageInfo:PageInfo[] = await fetchPageInfo();
const experiences:Experience[] = await fetchExperience();
const skills:Skill[] = await fetchSkills();
const projects:Project[] = await fetchProjects();
const socials:Social[] = await fetchSocial();
// const achievements:Achievement[] = await fetchAchievements();   // potential error, replace the tags if not working

return{
  props:{
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
},
// next.js will attempt to re-generate the page:
// - When a request comes in
// - At most once every n second

revalidate: 10,     // In seconds
};

};
