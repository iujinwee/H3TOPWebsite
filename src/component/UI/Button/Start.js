import React from 'react'
import { motion } from 'framer-motion';
import './Billboard.css'
import Fade from '../../Animation/Fade';

const Start = (props) => {


    return (
        <motion.button 
                className='flex flex-col items-center justify-center m-auto font-blackopsone'
                onClick={()=>{props.onClick(true)}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}>  
            
            <Fade
                direction="none"
                speed="0.6"
                delay="0.8"
                className='select-none bg-opacity-80 bg-black 
                            mx-auto mt-4 px-3 py-2  
                            rounded-2xl border-solid border-4
                            border-r-amber-300 border-x-lime-300 border-teal-200 border-b-red-300
                            hover:bg-slate-300  
                            hover:border-double hover:border-purple-500
                            text-red-200 font-bold 
                            text-2xl lg:text-4xl'>
                <div className="logo">
                    <b>
                        St<span>a</span>r<span>t</span>!
                    </b>
                </div>
            </Fade>
        </motion.button>
    )
}

export default Start