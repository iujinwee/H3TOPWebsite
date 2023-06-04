import React from "react";
import NeonButton from "../component/UI/Button/NeonButton";
import Fade from "../component/Animation/Fade";
import { intro } from "../Content";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import bg from "../images/background.png";
import { Link } from 'react-router-dom'
const Home = (props) => {
  return (
    <>
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer image={bg}/>
        <ParallaxBannerLayer className="h-screen overflow-auto">
          <div
            className="pt-56 select-none
                   font-extrabold text-center text-white
                   sm:text-2xl md:text-2xl lg:text-3xl 
                   font-blackopsone"
          >
            <Fade
              direction="left"
              speed="1.5"
              delay="0"
              className="text-4xl md:text-4xl lg:text-5xl 
                     font-sans
                     pb-2"
            >
              {intro.title1}
            </Fade>

            <Fade
              direction="right"
              speed="1.5"
              delay="0.5"
              className="text-3xl md:text-3xl lg:text-4xl
                     pb-2"
            >
              {intro.title2}
            </Fade>

            <Fade direction="left" speed="1.5" delay="1">
              {intro.title3}
            </Fade>

            <Link to="/story">
            <Fade
              className="flex flex-col justify-center items-center m-auto pt-10"
              direction="none"
              speed="1.5"
              delay="2"
            >
                <NeonButton speed="0.8">
                  <b>
                    L<span>e</span>t's Be<span>g</span>i<span>n</span>!
                  </b>
                </NeonButton>
            </Fade>
              </Link>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Home;
