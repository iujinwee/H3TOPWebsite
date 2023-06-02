import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/h3logo.png";
import styles from "./NavBar.module.css";

function NavigationBar() {
  const [Expanded, setExpanded] = useState(false);

  return (
    <div className="absolute w-full z-20">
      {/* Control Background of navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="select-none bg-black font-blackopsone"
        id="nav-bar"
        expanded={Expanded}
      >
        {/* Control height of navbar */}
          <Navbar.Brand href="/" className="ml-3">
            <img
              className="inline-block align-middle"
              src={Logo}
              width="60"
              height="60"
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
                className={`py-1 lg:px-4 hover:text-gray-500`}
              >
                <Link
                  to="/"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  
                  onClick={() => setExpanded(false)}
                >
                  Home
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500`}
              >
                <Link
                  to="/story"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => {setExpanded(false);}}
                >
                  Story
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500`}
              >
                <Link
                  to="/login"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => setExpanded(false)}
                >
                  Visa
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500`}
              >
                <Link
                  to="/clans"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit"}}
                  onClick={() => {setExpanded(false); }}
                >
                  Clans
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500`}
              >
                <Link
                  to="/team"
                  smooth
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={() => setExpanded(false)}
                >
                  Our Team
                </Link>
              </NavItem>

              <NavItem
                className={`py-1 px-4 hover:text-gray-500`}
              >
                <Link
                  to="/albums"
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
      </Navbar>
    </div>
  );
}

export default NavigationBar;
