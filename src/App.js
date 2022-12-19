import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import Story from './containers/Story';
import Clans from './containers/Clans';
import Visa from './containers/Visa';
import Team from './containers/Team';
import Albums from './containers/Albums';
import NavigationBar from './component/NavBar/NavBar';


function App() {


  return (
    <div className='flex flex-col w-screen h-screen overflow-x-auto'>
      <nav className="bg-main-bg bg-fixed bg-center bg-cover"> 
        <NavigationBar/>
        <Home/>
        <Story/>
        <Clans/>
        <Visa/> 
        <Team/> 
        <Albums/>
      </nav>
    </div>
  );
}

export default App;
