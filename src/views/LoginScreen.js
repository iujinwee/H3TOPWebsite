import React, { useEffect, useState } from "react";
import { visa } from "../Content";
import Fade from "../component/Animation/Fade";
import ReactTypingEffect from "react-typing-effect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NeonButton from "../component/UI/Button/NeonButton";

const LoginScreen = (props) => {
  const control = useAnimation();
  const [typing, setTyping] = useState(false);
  const [ref, inView] = useInView();


  const variant = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
      setTyping(true);
    }
  }, [control, inView]);

  return (
    <div 
      ref={ref} 
      className="text-center text-red-50 absolute items-center 
      flex flex-col w-screen">
      <Fade
        direction="none"
        speed="0.6"
        delay="0.4"
        className="select-none sm:w-72 w-5/12 
                    text-4xl md:text-5xl lg:text-6xl
                    bg-opacity-80 bg-black
                    border-4 
                    border-red-500 border-opacity-40
                    text-red-400 font-extralight">
        <div className="logo py-3">
          <b>
            W<span>A</span>RN<span>I</span>NG.
          </b>
        </div>
      </Fade>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={control}
        className="font-blackopsone sm:pt-10 sm:pb-4 md:pt-14 md:pb-6 lg:pt-16 lg:pb-8">
        {typing && (
          <ReactTypingEffect
            text={visa.login_title2}
            speed="80"
            eraseSpeed="70"
            eraseDelay={10000000}
            cursor=" "
            displayTextRenderer={(text) => {
              return (
                <p
                  className="tracking-tighter lg:tracking-wider   
                              font-outline-1 lg:px-80 md:px-24 sm:px-10 
                              lg:text-5xl md:text-4xl sm:text-4xl">
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        className="lg:leading-relaxed sm:leading-normal"
                        key={key}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>
              );
            }}
          />
        )}
      </motion.div>

      <NeonButton onClick={()=>{props.onClick()}} speed="5.5">
        <b>
          L<span>o</span>gin <span>t</span>o p<span>r</span>oce<span>e</span>d!
        </b>
      </NeonButton>
    </div>
  );
};

export default LoginScreen;
