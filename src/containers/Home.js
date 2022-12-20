import React from 'react'
import Button from '../component/UI/Button/Button'
import { motion } from 'framer-motion'
import Fade from '../component/Animation/Fade'

const Home = (props) => {


  const buttonVariant = {
    hidden: {
      opacity:0 
    },
    visible: {
      opacity: 1,
      transition: {delay: 1.5, duration: 1, type: 'tween'}
    },
    exit: {
      opacity:0,
      transition: {duration: 0.5}
    }
  }

  return (
    <>
      <div
        className='flex flex-col items-center bg-transparent shadow-none m-auto
                             font-bold whitespace-nowrap text-2xl md:text-3xl lg:text-4xl text-black
                             pt-20 md:pt-16 lg:pt-12'>
        <Fade 
          direction="left" 
          speed = "1.5"
          delay = "0"
          className="text-3xl md:text-4xl lg:text-5xl">
            Welcome to
        </Fade> 

        <Fade 
          direction="right" 
          speed = "1.5"
          delay = "0.5">
            Hall of Residence 3
        </Fade>
        
        <Fade 
          direction="left" 
          speed = "1.5"
          delay = "1">
            Transition Orientation Programme!
        </Fade>
      </div>
      
      <Fade
        className='flex flex-col justify-center items-center m-auto pt-10'
        direction="none"
        speed = "1.5"
        delay = "2">
          <Button style={{ transform: 'rotate(var(--rotate))' }}>Begin</Button>
      </Fade>
    </>
  )
}

export default Home