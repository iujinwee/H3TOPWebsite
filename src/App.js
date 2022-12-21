import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/NavBar/NavBar';

import AnimatedNavBar from './component/NavBar/AnimatedNavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <div className="select-none bg-main-bg h-screen
                      bg-center bg-fixed bg-auto bg-no-repeat overflow-auto
                      lg:bg-fixed lg:bg-repeat">

        {/* Navigate to top */}
        <div className='p-0 m-0' id='home'/> 

        <NavigationBar/>
        <AnimatedNavBar/> 
            
      </div>
    </BrowserRouter>
  );
}

export default App;
