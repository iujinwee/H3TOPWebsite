import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Button = () => {

    const navigate= useNavigate();

    const clickHandler = () => {
        navigate("/story")
    }

    return (

        <motion.button className='select-none bg-purple-700 bg-opacity-80 
                            rounded-2xl border-solid border-purple-300 border-2 
                            hover:border-double hover:border-purple-500
                            text-xl font-semibold 
                            h-16 w-40 mx-auto mt-32'
                onClick={clickHandler}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
            Let's Begin
        </motion.button>
    )
}

export default Button