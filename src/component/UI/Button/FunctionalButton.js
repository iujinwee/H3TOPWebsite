import React from 'react'
import { motion } from "framer-motion";

const FunctionalButton = (props) => {
  return (
    <motion.button
            onClick={props.onClick}
            // onTap={props.onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`select-none bg-gray-800 bg-opacity-70 
                        rounded-2xl border-solid border-purple-300 border-2 
                        hover:border-double hover:border-purple-500
                        text-sky-50 font-bold 
                        sm:text-sm md:text-lg lg:text-lg
                        sm:mx-0 md:mx-2 lg:mx-6
                        px-2 py-2 ${props.className}`}
          >
        {props.message}
    </motion.button>
  )
}

export default FunctionalButton