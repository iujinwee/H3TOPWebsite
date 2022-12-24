import React, { useEffect } from 'react'
import { motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";


const Fade = (props) => {

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
    }, [control, inView]);

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
    <motion.div
      id={props.id} 
      className={props.className}
      ref = {ref}
      variants={Variant}
      initial="hidden"
      animate= {control}
      exit="exit">
        {props.children}
    </motion.div>
  )
}

export default Fade