import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Fade from "../component/Animation/Fade";
import NeonButton from "../component/UI/Button/NeonButton";
import Card from "../component/UI/Card/Card";

import { story } from "../Content";
import bg from "../images/neon_bg.jpg";

const Instructions = (props) => {
  const startHandler = () => {
    const element = document.getElementById("login_start");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ParallaxBanner className="sm:h-[120vh] lg:h-[130vh] scale-105">
        <ParallaxBannerLayer
          image={bg}
          speed={15}
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
        <ParallaxBannerLayer>
          <div
            className="relative -inset-y-12 m-0"
            id="instructions"
            key="instructions"
          />
          <Fade
            direction="bottom"
            speed="1"
            delay="0"
            className="text-2xl leading-10 font-audiowide sm:px-0 lg:px-60 sm:pt-4 lg:pt-10"
          >
            <Card
              className="flex flex-col bg-[#160731] bg-opacity-70 
                         sm:-tracking-normal lg:tracking-wider
                         sm:text-xs lg:text-xl font-outline-0-5
                         lg:leading-loose sm:leading-loose"
            >
              <h1 className="font-black font-blackopsone pb-2 pt-1">
                {story.Setup}
              </h1>
              <p className="pb-4">{story.StoryTwist}</p>

              <h1 className="font-black font-blackopsone pb-2">
                {story.Objective}
              </h1>
              <p className="pb-2">{story.ObjectiveContent}</p>

              <NeonButton onClick={startHandler} speed="0.8">
                <b className="font-outline-0 lg:text-3xl">
                  St<span>a</span>r<span>t</span>!
                </b>
              </NeonButton>
            </Card>
          </Fade>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Instructions;
