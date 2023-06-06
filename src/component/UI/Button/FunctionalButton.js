import React from 'react'
import { motion } from "framer-motion";

const FunctionalButton = (props) => {
  return (
    <motion.button
        onClick={props.onClick}
        // onTap={props.onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`select-none bg-black bg-opacity-70 
                    rounded-2xl border-solid border-slate-700 border-opacity-80 border-2
                    hover:scale-110
                    text-white font-blackopsone  
                    sm:text-base md:text-lg lg:text-lg
                    sm:mx-0 md:mx-2 lg:mx-6
                    px-2 py-2 ${props.className}`}
      >
    {props.message}
    </motion.button>
  )
}

export default FunctionalButton