import React, { useEffect, useState } from "react";
import Card from "../component/UI/Card/Card";
import { story } from "../Content.js";
import Fade from "../component/Animation/Fade";
import NeonButton from "../component/UI/Button/NeonButton";
import ReactTypingEffect from "react-typing-effect";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import bg from '../images/vaporwave-city-lights.gif'

const Story = () => {

  const control = useAnimation()
  const [typing, setTyping] = useState(false)
  const [ref, inView] = useInView()

  const startHandler = () => {
    const element = document.getElementById("instructions");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const variant = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity:1, 
    }
  }

  useEffect(() => {
    if (inView) {
      control.start("show");
      setTyping(true);
    } 
  }, [control, inView]);

  return (
    <>
      <div id="story" key="story" className="relative lg:-top-16 sm:-top-64"/>
      <div id="story_start" key="story_start" className="relative -top-20"/>
      <ParallaxBanner className="h-[110vh] scale-105">
        <ParallaxBannerLayer image={bg} speed={15} className="bg-top blur-sm w-screen"/>
        <ParallaxBannerLayer className="sm:pt-8 lg:pt-16">
          
      <Fade
        direction="bottom"
        speed="1"
        delay="0"
        className="text-2xl leading-10"
      >
        <Card className="flex flex-col m-auto bg-[rgb(45,9,43)] bg-opacity-60 font-audiowide">
          <div className="items-center justify-center m-auto">
            <Fade 
              direction="right"
              speed="1.6"
              delay="0.5"
            >
              <h1 ref = {ref} className="text-amber-50 lg:text-5xl sm:text-3xl font-black font-blackopsone
                                            mb-3 tracking-wider font-outline-0-5">
                {story.Header}
              </h1>
            </Fade>
          </div>

          <motion.div 
              variants={variant}
              initial="hidden"
              animate={control}>

            {typing && <ReactTypingEffect 
                text={story.MainStory}
                speed="8"
                eraseDelay={10000000}
                cursor=" " 
                displayTextRenderer={(text, i) => {
                  return (
                    <p className="sm:-tracking-normal lg:tracking-wider     
                                  sm:text-xs md:text-base lg:text-xl font-outline-0-5">
                      {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span className="lg:leading-loose sm:leading-loose"
                            key={key}
                          >{char}</span>
                        );
                      })}
                    </p>
                  );
                }} />}
          </motion.div>
          
        <div className="justify-center items-center"> 
          <NeonButton onClick={startHandler} speed={16}>
              <b>
                  The G<span>a</span>me i<span>s</span> a<span>b</span>out t<span>o</span> Be<span>g</span>in!
              </b>
          </NeonButton>
        </div>  

        </Card>
      </Fade>
      </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Story;
