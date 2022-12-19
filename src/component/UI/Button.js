import { motion } from 'framer-motion';
import React from 'react'


const Button = () => {

    const clickHandler = () => {
        <motion transition={{ delay: 1 }}>
            window.location.href="#story";
        </motion>
    }

    return (

        <motion.button className='select-none bg-purple-700 bg-opacity-80 
                            rounded-2xl border-solid border-purple-300 border-2 
                            hover:border-double hover:border-purple-500
                            text-xl font-semibold h-16 w-40 m-auto'
                onClick={clickHandler}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
            Let's Begin
        </motion.button>
    )
}

export default Button