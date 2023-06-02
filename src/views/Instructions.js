import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { story } from "../Content";
import Fade from "../component/Animation/Fade";
import NeonButton from "../component/UI/Button/NeonButton";
import Card from "../component/UI/Card/Card";
import bg from "../images/neon_bg.jpg";
import { Link } from "react-router-dom";

const Instructions = () => {

  return (
    <>
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer
          image={bg}
          style={{
            "background-position": "15%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "black",
            scale: "105%",
            "-webkit-filter": "blur(4px)",
            filter: "blur(4px)",
          }}
        />
        <ParallaxBannerLayer className="overflow-auto sm:px-0 lg:px-60 sm:pt-20 lg:pt-40">
          <Fade
            direction="bottom"
            speed="1"
            delay="0"
            className="text-2xl leading-10 font-audiowide"
          >
            <Card
              className="flex flex-col bg-[#160731] bg-opacity-70 
                         sm:-tracking-normal lg:tracking-wider
                         sm:text-xs lg:text-xl font-outline-0-5
                         lg:leading-loose sm:leading-loose"
            >
              <h1 className="font-black font-blackopsone pb-2 pt-1 sm:text-xl lg:text-3xl">
                {story.Setup}
              </h1>
              <p className="pb-4">{story.StoryTwist}</p>

              <h1 className="font-black font-blackopsone pb-2 sm:text-xl lg:text-3xl">
                {story.Objective}
              </h1>
              <p className="pb-2">{story.ObjectiveContent}</p>

              <Link to="/login">
                <NeonButton speed="0.8">
                  <b className="font-outline-0 lg:text-3xl">
                    St<span>a</span>r<span>t</span>!
                  </b>
                </NeonButton>
              </Link>
            </Card>
          </Fade>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Instructions;
