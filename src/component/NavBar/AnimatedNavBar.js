import React from 'react'
import Home from '../../containers/Home'
import Clans from '../../containers/Clans'
import Visa from '../../containers/Visa'
import Team from '../../containers/Team'
import Albums from '../../containers/Albums'
import { AnimatePresence } from 'framer-motion'

import Story from '../../containers/Story'

const AnimatedNavBar = () => {
    
    return (
        <AnimatePresence>
            <Home/>
            <Story/>
            <Clans/>
            <Visa/>
            <Team/> 
            <Albums/>
        </AnimatePresence>
    )
}

export default AnimatedNavBar