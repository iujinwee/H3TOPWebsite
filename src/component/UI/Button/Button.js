import { motion } from 'framer-motion';
import React from 'react'

const Button = (props) => {

    return (

        <motion.button 
                className={props.className}
                onClick={props.onClick}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
            {props.message}
        </motion.button>
    )
}

export default Button