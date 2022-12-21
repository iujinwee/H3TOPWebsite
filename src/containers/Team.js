import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useInView } from "react-intersection-observer";
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion';
import Fade from '../component/Animation/Fade';
import { team } from '../Content';

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
      x:-100
    }, 
    show: {
      opacity: 1,
      x:0, 
      transition: {
        duration: 0.8
      }
    }
  }

  useEffect(() => {
    if (inView) {
      control.start("show");
    } else{
      control.start("hidden")
    }
  }, [control, inView]);

  return (  

    <div className="opacity-0" id="team">

      <Card className='overflow-hidden'>
        <ul className='list-none px-0 md:px-16 lg:px-32'>

          <Fade 
            direction = "bottom"
            speed="1.5"
            delay="0.2"
            className='font-bold text-5xl text-center
                       bg-transparent mb-4'>
            {team.title}                
          </Fade>

          <Fade 
            direction="bottom"
            speed="1.2"
            delay="0.5"
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
                <div>{team.p.name}</div>
                <div>{team.p.tag}</div>
              </motion.li>

          </motion.ul>
          
        </ul>
      </Card>

    </div>
  )
}

export default Team