import React from 'react'
import { motion } from 'framer-motion';
import './NeonButton.css'
import Fade from '../../Animation/Fade';

const NeonButton = (props) => {
    return (
        <motion.button 
                className='flex flex-col items-center justify-center m-auto font-blackopsone'
                onClick={()=>{props.onClick(true)}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}>  
            
            <Fade
                direction="none"
                speed="0.6"
                delay={props.speed}
                className={`select-none bg-opacity-80 bg-black
                            lg:mt-0 lg:px-3 lg:py-2  
                            sm:mt-3 sm:px-3 sm:py-2  
                            rounded-2xl border-solid border-4
                            border-r-amber-300 border-x-lime-300 border-teal-200 border-b-red-300
                            text-red-200 font-medium 
                            sm:text-xl lg:text-4xl` }>
                <div className="logo lg:text-4xl md:text-3xl sm:text-2xl">
                    {props.children}
                </div>
            </Fade>
        </motion.button>
    )
}

export default NeonButton