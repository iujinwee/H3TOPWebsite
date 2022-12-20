import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/NavBar/NavBar';
import { 
  HashRouter
} from 'react-router-dom'
import AnimatedNavBar from './component/NavBar/AnimatedNavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
        <div className="select-none bg-main-bg h-screen
                        bg-center bg-fixed bg-auto bg-no-repeat overflow-auto
                        lg:bg-fixed lg:bg-repeat">
          <nav id="home"> 
            <NavigationBar/>
            <AnimatedNavBar/>
          </nav>  
          
        </div>
    </BrowserRouter>
  );
}

export default App;
