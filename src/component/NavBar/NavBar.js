import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/h3logo.png";
import { SocialIcon } from "react-social-icons";
import styles from "./NavBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { NavItem } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function NavigationBar() {
  const router = useLocation();
  const [Expanded, setExpanded] = useState(false);

  return (
    <>

      {/* Control Background of navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="select-none sticky-top bg-black overflow-x-hidden  h-full font-blackopsone"
        id="nav-bar"
        expanded={Expanded}
      >
        {/* Control height of navbar */}
        <Container className="m-auto px-0 py-2 container">
          <Navbar.Brand href="/" className="ml-3">
            <img
              className="inline-block align-middle"
              src={Logo}
              width="50"
              height="50"
              alt="Hall 3"
            />
            <span className="font-semibold align-middle ">H3 TOP'23</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="mr-6"
            onClick={() => {setExpanded(Expanded?false:"expanded")}}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-center items-center m-auto
                            font-bold text-gray-400 text-sm">
              <NavItem
                className={`py-1 lg:px-4 hover:text-gray-500 ${
                  router.hash === "#home" ? "text-gray-200" : "text-inherit"
                }`}
              >
                <Link
                  to="#home"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  
                  onClick={() => setExpanded(false)}
                >
                  Home
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500 ${
                  router.hash === "#story" ? "text-gray-300" : "text-inherit"
                }`}
              >
                <Link
                  to="#story"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => {setExpanded(false);}}
                >
                  Story
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500 ${
                  router.hash === "#visa" ? "text-gray-300" : "text-inherit"
                }`}
              >
                <Link
                  to="#login"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => setExpanded(false)}
                >
                  Visa
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500 ${
                  router.hash === "#clans" ? "text-gray-300" : "text-inherit"
                }`}
              >
                <Link
                  to="#clans"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit"}}
                  onClick={() => {setExpanded(false); }}
                >
                  Clans
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500 ${
                  router.hash === "#team" ? "text-gray-300" : "text-inherit"
                }`}
              >
                <Link
                  to="#team"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => setExpanded(false)}
                >
                  Our Team
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500 ${
                  router.hash === "#albums" ? "text-gray-300" : "text-inherit"
                }`}
              >
                <Link
                  to="#albums"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => setExpanded(false)}
                >
                  Albums
                </Link>
              </NavItem>
            </Nav>

            <div className="flex flex-row justify-end">
              <span
                className="font-semibold text-slate-200 
                           flex items-center justify-center"
              >
                Join Us!
              </span>
              <SocialIcon
                className={`ml-3 rounded-full ${styles.instagram}`}
                bgColor="transparent"
                fgColor="white"
                style={{ height: 35, width: 35 }}
                url="https://www.instagram.com/hall3fop/"
                target="_blank"
              />
              <SocialIcon
                className="ml-3"
                bgColor="#229ED9"
                fgColor="white"
                style={{ height: 35, width: 35 }}
                url="https://t.me/AllThingsHall3"
                target="_blank"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
