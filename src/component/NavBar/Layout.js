import React from 'react'
import Home from '../../containers/Home'
import Clans from '../../containers/Clans'
import Team from '../../containers/Team'
import Albums from '../../containers/Albums'
import Instructions from '../../containers/Instructions'
import ClansDescriptions from '../../containers/ClansDescriptions'
import Story from '../../containers/Story'

import { AnimatePresence } from 'framer-motion'
import Login from '../UI/Login/Login'



const Layout = () => {
        
    return (
        <AnimatePresence>
            <Home/>
            <Story/>
            <Instructions/>
            <Login/>
            <Clans/>
            <ClansDescriptions/>
            <Team/> 
            <Albums/>
        </AnimatePresence>
    )
}

export default Layout