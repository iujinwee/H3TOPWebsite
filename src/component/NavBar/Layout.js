import React from 'react'
import Home from '../../containers/Home'
import Clans from '../../containers/Clans'
import Visa from '../../containers/Visa'
import Team from '../../containers/Team'
import Albums from '../../containers/Albums'
import Instructions from '../../containers/Instructions'
import { AnimatePresence } from 'framer-motion'
import ClansDescriptions from '../../containers/ClansDescriptions'

import Story from '../../containers/Story'

const Layout = () => {
        
    return (
        <AnimatePresence>
            <Home/>
            <Story/>
            <Instructions/>
            <Visa/>
            <Clans/>
            <ClansDescriptions/>
            <Team/> 
            <Albums/>
        </AnimatePresence>
    )
}

export default Layout