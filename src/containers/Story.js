import React, { useEffect, useState } from "react";
import Card from "../component/UI/Card/Card";
import { story } from "../Content.js";
import Fade from "../component/Animation/Fade";
import Billboard from "../component/UI/Button/Billboard";
import ReactTypingEffect from "react-typing-effect";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

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
      <div className="p-0 m-0" id="story"/>
      <Fade
        direction="bottom"
        speed="1"
        delay="0"
        className="pt-20 md:pt-20 lg:pt-16
                    text-2xl leading-10 h-screen"
      >
        <Card className="flex flex-col mx-auto">
          <div className="items-center justify-center mx-auto">
            <Fade 
              direction="right"
              speed="1.6"
              delay="0.5"
            >
              <h1 ref = {ref} className="text-amber-50 text-5xl font-extrabold
                                            mb-3 tracking-wider font-outline-1">
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
                speed="35"
                eraseDelay={10000000}
                cursor=" " 
                displayTextRenderer={(text, i) => {
                  return (
                    <p className="tracking-tighter lg:tracking-wider   
                                  text-xl lg:text-2xl font-outline-0-5">
                      {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span className="lg:leading-relaxed leading-loose"
                            key={key}
                          >{char}</span>
                        );
                      })}
                    </p>
                  );
                }} />}
          </motion.div>
          
        <div className="justify-center items-center"> 
          <Billboard onClick={startHandler} />
        </div>  

        </Card>
      </Fade>

      <div className="h-screen"/>
    </>
  );
};

export default Story;
