import React from 'react'
import { motion } from 'framer-motion'

const Fade = (props) => {

    const topVariant = {
        hidden: {
          opacity: 0,
          y:-100
        },
        visible: {
          opacity: 1,
          y:0,
          transition: {delay: 0, duration: props.speed, type: 'tween'}
        },
        exit: {
          opacity:0,
          y:100,
          transition: {duration: 0.5},
        }
      }

  const bottomVariant = {
    hidden: {
      opacity: 0,
      y:100
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {delay: props.delay, duration: props.speed, type: 'tween'}
    },
    exit: {
      opacity:0,
      y:-100,
      transition: {duration: 0.5},
    }
  }

  const leftVariant = {
    hidden: {
      opacity: 0,
      x:-100
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {delay: props.delay, duration: props.speed, type: 'tween'}
    },
    exit: {
      opacity:0,
      x:100,
      transition: {duration: 0.5},
    }
  }

  const rightVariant = {
    hidden: {
      opacity: 0,
      x:100
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {delay: props.delay, duration: 1.5, type: 'tween'}
    },
    exit: {
      opacity:0,
      x:-100,
      transition: {duration: 0.5},
    }
  }
  
  const defaultVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {delay: props.delay, duration: 1.5, type: 'tween'}
    },
    exit: {
      opacity:0,
      transition: {duration: 0.5}
    }
  }

  const VariantSelector = (x) => {
    switch (x) {
        case 'left':
            return leftVariant;
        
        case 'bottom': 
            return bottomVariant;

        case 'right': 
            return rightVariant;
            
        case 'top': 
            return topVariant;

        default:
            return defaultVariant;
    }
}

const Variant = VariantSelector(props.direction);

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

export default Fade