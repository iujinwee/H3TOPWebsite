import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import NavBar from "./component/NavBar/NavBar";
import Layout from "./component/NavBar/Layout";

function App() {
  return (
    <BrowserRouter className="overflow-x-hidden">
      <ParallaxProvider>
        <NavBar />
        {/* <div className="select-none bg-main-bg h-screen 
                      bg-center bg-scroll bg-auto bg-no-repeat overflow-x-hidden
                      lg:bg-center lg:bg-scroll lg:bg-auto lg:bg-no-repeat font-audiowide"> */}


        <Layout />
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
