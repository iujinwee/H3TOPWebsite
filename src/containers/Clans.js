import {React, useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

import Fade from '../component/Animation/Fade'
import Card from '../component/UI/Card/Card'
import CharacterCard from '../component/UI/Characters/CharacterCard'
import { clans } from '../Content'

import doku from '../images/doku.jpg'

const Clans = (props) => {

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
    <div className="pt-20 lg:pt-16" id="clans">
      <Card className='overflow-hidden'>
        <ul className='list-none px-0 md:px-16 lg:px-32'>

          <Fade 
            direction = "bottom"
            speed="1.5"
            delay="0.2"
            className='font-bold text-5xl text-center mb-4'>
            {clans.opening}                  
          </Fade>
            
          <Fade 
            direction="bottom"
            speed="1.2"
            delay="0.5"
            className='font-bold text-xl text-center mb-5'>
              {clans.clanCards}
          </Fade>
        
          <motion.ul 
            ref = {ref}
            variants={variant}
            initial="hidden"
            animate={control}
            className='list-none pl-0 flex flex-wrap mx-auto lg:w-11/12 justify-center'>
              {/* Control width */}

              <motion.li variants={delay}> 
                <CharacterCard image={doku} name={clans.Akari.name} tag={clans.Akari.quirk}/>
              </motion.li>

              <motion.li variants={delay}> 
                <CharacterCard image={doku} name={clans.Bankai.name} tag={clans.Bankai.quirk}/> 
              </motion.li>
              
              <motion.li variants={delay}> 
                <CharacterCard image={doku} name={clans.Chakra.name} tag={clans.Chakra.quirk}/>
              </motion.li>

              <motion.li variants={delay}> 
                <CharacterCard image={doku} name={clans.Doku.name} tag={clans.Doku.quirk}/>
              </motion.li>

              <motion.li variants={delay}> 
                <CharacterCard image={doku} name={clans.Enji.name} tag={clans.Enji.quirk}/>
              </motion.li>
             
          </motion.ul>
          
        </ul>
      </Card>

    </div>
  )
}

export default Clans