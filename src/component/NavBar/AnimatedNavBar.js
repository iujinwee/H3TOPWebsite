import React from 'react'
import Home from '../../containers/Home'
import Story from '../../containers/Story'
import Clans from '../../containers/Clans'
import Visa from '../../containers/Visa'
import Team from '../../containers/Team'
import Albums from '../../containers/Albums'
import { AnimatePresence } from 'framer-motion'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

const AnimatedNavBar = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>    
                <Route path='/' element={<Home/>}/>
                <Route path='/story' element={<Story/>}/>
                <Route path='/clans' element={<Clans/>}/>
                <Route path='/visa' element={<Visa/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/albums' element={<Albums/>}/>
            </Routes> 
        </AnimatePresence>
    )
}

export default AnimatedNavBar