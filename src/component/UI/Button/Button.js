import { motion } from 'framer-motion';
import React from 'react'

const Button = (props) => {

    const clickHandler = () => {
        const element = document.getElementById(props.id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (

        <motion.button 
                className={props.className}
                onClick={clickHandler}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
            {props.message}
        </motion.button>
    )
}

export default Button