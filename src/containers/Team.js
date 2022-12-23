import {React, useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion'

import Card from '../component/UI/Card/Card'
import Fade from '../component/Animation/Fade'
import ExcoCard from '../component/UI/ExcoCard/ExcoCard'
import { team } from '../Content'

import doku from '../images/doku.jpg'


const Team = (props) => {

  const control = useAnimation()
  const [ref, inView] = useInView()

  const variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity:1, 
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3
      }
    }
  }

  const delay = {
    hidden: {
      opacity: 0,
      y:100
    }, 
    show: {
      opacity: 1,
      y:0, 
      transition: {
        duration: 0.8
      }
    }
  }

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
    // } else{
    //   control.start("hidden")
    // }
  }, [control, inView]);

  return (  
    <div className="pt-20 lg:pt-16" id="team">
      <Card className='overflow-hidden'>
        <ul className='list-none px-0 md:px-16 lg:px-32'>

          <Fade 
            direction = "bottom"
            speed="1.5"
            delay="0.2"
            hidden="true"
            className='font-bold text-5xl text-center mb-4'>
            {team.title}                  
          </Fade>
            
          <Fade 
            direction="bottom"
            speed="1.2"
            delay="0.5"
            hidden="true"
            className='font-bold text-xl text-center mb-5'>
              {team.opening}
          </Fade>
        
          <motion.ul 
            ref = {ref}
            variants={variant}
            initial="hidden"
            animate={control}
            className='list-none pl-0 flex flex-wrap m-auto justify-center'>

              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.p.name} tag={team.p.tag}/>
              </motion.li>

              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.vp.name} tag={team.vp.tag}/>
              </motion.li>
              
              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.cp.name1} tag={team.cp.tag}/>
              </motion.li>

              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.cp.name2} tag={team.cp.tag}/>
              </motion.li>

              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.ocgl.name} tag={team.ocgl.tag}/>
              </motion.li>
              
              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.pnp.name} tag={team.pnp.tag}/>
              </motion.li>

              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.log.name} tag={team.log.tag}/>
              </motion.li>

              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.bmag.name} tag={team.bmag.tag}/>
              </motion.li>

              <motion.li variants={delay}> 
                <ExcoCard image={doku} name={team.fincon.name} tag={team.fincon.tag}/>
              </motion.li>
          </motion.ul>
          
        </ul>
      </Card>

    </div>
  )
}

export default Team