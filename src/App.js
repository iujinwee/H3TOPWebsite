import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import Story from './containers/Story';
import Clans from './containers/Clans';
import Visa from './containers/Visa';
import Team from './containers/Team';
import Albums from './containers/Albums';
import NavigationBar from './component/NavBar/NavBar';
import { AnimatePresence } from 'framer-motion'

function App() {


  return (
    <AnimatePresence className='flex flex-col w-screen h-screen overflow-x-auto'>
      <nav className="select-none bg-main-bg bg-fixed bg-center bg-auto lg:bg-auto lg:bg-center" id="home"> 
        <NavigationBar/>
        <Home/>
        <Story/>
        <Clans/>
        <Visa/> 
        <Team/> 
        <Albums/>
      </nav>
    </AnimatePresence>
  );
}

export default App;
