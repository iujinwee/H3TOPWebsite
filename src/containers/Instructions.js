import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Fade from "../component/Animation/Fade";
import Start from "../component/UI/Button/Start";
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
      <ParallaxBanner className="h-screen scale-105">
        <ParallaxBannerLayer
          image={bg}
          speed={0}
          style={{
            "background-position": "center",
            "backgroundRepeat" : "no-repeat",
            '@media (max-width: 768px) rotate': '90deg',
            "backgroundSize": "auto",
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
            className="text-2xl leading-10 font-audiowide lg:pt-8 sm:pt-10 "
          >
            <Card className="flex flex-col bg-[rgba(73,15,69,0)] bg-opacity-60">
              <h1 className="text-amber-200 text-3xl font-bold mb-2 sm:text-2xl">
                {story.Setup}
              </h1>
              <p
                className="lg:mb-16 sm:mb-8
                              text-xl lg:text-xl sm:text-xs
                              sm:tracking-tighter lg:tracking-normal sm:leading-relaxed lg:leading-loose"
              >
                {story.StoryTwist}
              </p>

              <h1 className="text-lime-300 text-3xl font-bold mb-2 sm:text-2xl">
                {story.Objective}
              </h1>
              <p
                className="text-xl lg:text-xl sm:text-xs
                              tracking-tighter lg:tracking-wider sm:leading-relaxed lg:leading-loose"
              >
                {story.ObjectiveContent}
              </p>

              <Start onClick={startHandler} />
            </Card>
          </Fade>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Instructions;
