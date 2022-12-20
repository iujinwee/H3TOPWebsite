import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/h3logo.png'
import { SocialIcon } from 'react-social-icons';
import styles from './NavBar.module.css'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function NavigationBar() {
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" 
              className='sticky-top bg-dark container-fluid'>

        <Container className='m-auto p-0'>
          <Navbar.Brand href="#home" className='w-max'>
            <img className='inline-block align-middle' src={Logo} width="50" height="50" alt=""/>
            <span className='font-semibold align-middle '>H3 TOP'23</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="px-4 m-auto font-semibold">
              <NavLink to="/home" className='ml-7'>Home</NavLink>
              <NavLink href="/story" className='ml-7'>Story</NavLink>
              <NavLink href="/clans" className='ml-7'>Clans</NavLink>
              <NavLink href="/visa" className='ml-7'>Visa</NavLink>
              <NavLink href="/team" className='ml-7'>Our Team</NavLink>
              <NavLink href="/album" className='ml-7'>Albums</NavLink>
            </Nav>

            <div>
              <span className='font-semibold text-slate-200
                               ml-4 align-middle'>Join Us!</span>
              <SocialIcon className={`ml-3 rounded-full ${styles.instagram}`}
                          bgColor='transparent'
                          fgColor='white'
                          style={{ height: 35, width: 35 }}
                          url="https://www.instagram.com/hall3fop/"
                          target="_blank"/>
              <SocialIcon className='ml-3'
                          bgColor='#229ED9' 
                          fgColor='white'
                          style={{ height: 35, width: 35 }}
                          url="https://t.me/AllThingsHall3"
                          target="_blank"/>
            </div>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;