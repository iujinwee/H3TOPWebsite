import React, { useEffect, useState } from "react";
import Card from "../component/UI/Card/Card";
import { story } from "../Content.js";
import Fade from "../component/Animation/Fade";
import NeonButton from "../component/UI/Button/NeonButton";
import ReactTypingEffect from "react-typing-effect";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import akari from '../images/OGCards/akari.jpg'
import bg from '../images/vaporwave-city-lights.gif'
import { Link } from "react-router-dom";

const Story = () => {

  const control = useAnimation()
  const [typing, setTyping] = useState(false)
  const [ref, inView] = useInView()
  const [setting, setSetting] = useState("prologue")

  const variant = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity:1, 
    }
  }

  const renderText = (text) => {
    return (
      <p 
        className="sm:-tracking-normal lg:tracking-wider     
        sm:text-[13px] sm:leading-7 md:text-base lg:text-xl font-outline-0-5">
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
  }

  useEffect(() => {
    if (inView) {
      control.start("show");
      setTyping(true);
    } 
  }, [control, inView]);

  return (
    <>
      <ParallaxBanner className="h-screen">
        <ParallaxBannerLayer image={bg} className="blur-sm scale-110"/>
        <ParallaxBannerLayer className="sm:pt-24 sm:pb-8 lg:pt-32 overflow-auto">
          <Fade
            direction="bottom"
            speed="1"
            delay="0"
            className="text-2xl leading-10"
          >
            <Card className="flex flex-col m-auto bg-[rgb(45,9,43)] bg-opacity-60 font-audiowide">
              {/* Title */}
              <div className="items-center justify-center m-auto">
                <Fade 
                  direction="right"
                  speed="1.6"
                  delay="0.3"
                >
                  <h1 ref = {ref} className="text-amber-50 lg:text-5xl sm:text-3xl font-black font-blackopsone
                                                mb-3 tracking-wider font-outline-0-5">
                    {story.Header}
                  </h1>
                </Fade>
              </div>

              {setting === "prologue" &&  
                <div>
                  <motion.div 
                      variants={variant}
                      initial="hidden"
                      animate={control}>

                    {typing && <ReactTypingEffect 
                        text={story.MainStory.title}
                        speed="10"
                        eraseDelay={10000000}
                        cursor=" " 
                        displayTextRenderer={renderText} />}
                  </motion.div>

                <Fade speed="20" delay="5.3">
                  <ul className="my-3 mx-auto">
                    {story.MainStory.clans.map(
                      (clan)=>{
                        return (
                          <li
                            className={`text-center mx-auto 
                              sm:text-[13px] sm:leading-5 text-lg font-saudiowide
                              sm:p-1 lg:p-2 ${clan.color}
                              sm:-tracking-normal lg:tracking-wider`}>
                            {clan.name}
                          </li>)
                      }
                    )}
                  </ul>
                </Fade>

                  <motion.div 
                    className="sm:mb-0 mb-4"
                    variants={variant}
                    initial="hidden"
                    animate={control}>

                    {typing && <ReactTypingEffect 
                        text={story.MainStory.subtitle}
                        speed="10"
                        typingDelay={7200}
                        eraseDelay={10000000}
                        cursor=" " 
                        displayTextRenderer={renderText} />}
                  </motion.div>

                  <div className="justify-center items-center"> 
                    <NeonButton onClick={() => {setSetting("prompt")}} speed={12}>
                        <b className="sm:text-lg md:text-xl text-2xl">
                            <div> C<span>o</span>nt<span>i</span>nu<span>e</span></div>
                        </b>
                    </NeonButton>
                  </div>  
                </div>
              }

              {setting === "prompt" &&  
                <div>
                  <motion.div className="sm:mb-0 md:mb-2 lg:mb-4">
                    {typing && <ReactTypingEffect 
                        typingDelay={1000}                    
                        text={story.MainStory.prompt}
                        speed="10"
                        eraseDelay={10000000}
                        cursor=" " 
                        displayTextRenderer={renderText} />}
                  </motion.div>
                  
                  <Link to="/instructions" className="justify-center items-center"> 
                    <NeonButton speed={10.2}>
                        <b className="sm:text-lg md:text-xl text-2xl">
                            <div> The G<span>a</span>me i<span>s</span> a<span>b</span>out </div>
                            <div> t<span>o</span> Be<span>g</span>in! </div>
                        </b>
                    </NeonButton>
                  </Link>  
                </div>
              }
            </Card>
          </Fade>
      </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
};

export default Story;
