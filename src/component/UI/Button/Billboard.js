import React from 'react'
import { motion } from 'framer-motion';
import './Billboard.css'
import Fade from '../../Animation/Fade';

const Billboard = (props) => {


    return (
        <motion.button 
                className='flex flex-col items-center justify-center m-auto'
                onClick={()=>{props.onClick(true)}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}>  
            
            <Fade
                direction="none"
                speed="1"
                delay="1.5"
                className='select-none bg-opacity-80 bg-black 
                            mx-auto mt-8 px-3 py-2  
                            rounded-2xl border-solid border-4
                            border-r-amber-300 border-x-lime-300 border-teal-200 border-b-red-300
                            hover:bg-slate-300  
                            hover:border-double hover:border-purple-500
                            text-red-200 font-bold 
                            text-2xl lg:text-4xl'>
                <div className="logo">
                    <b>
                        The G<span>a</span>me i<span>s</span> a<span>b</span>out t<span>o</span> Be<span>g</span>in!
                    </b>
                </div>
            </Fade>
        </motion.button>
    )
}

export default Billboard