import React from 'react'
import { motion } from 'framer-motion'

const BottomFade = (props) => {
  
  const Variant = {
    hidden: {
      opacity: 0,
      y:100
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {delay: 0, duration: 1.5, type: 'tween'}
    },
    exit: {
      opacity:0,
      y:-100,
      transition: {duration: 0.5},
    }
  }

  return (
    <motion.div id="story"
                className={props.className}
                variants={Variant}
                initial="hidden"
                animate="visible"
                exit="exit">
        {props.children}
    </motion.div>
  )
}

export default BottomFade