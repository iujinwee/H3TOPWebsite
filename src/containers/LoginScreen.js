import React, { useEffect, useState } from "react";
import { visa } from "../Content";
import Fade from "../component/Animation/Fade";
import ReactTypingEffect from "react-typing-effect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      id="loginscreen"
      ref={ref}
      className="h-screen flex flex-col sm:mt-20 md:mt-14 lg:mt-20"
    >
      <div className="text-center text-red-50">
        <div className="mx-auto justify-center lg:px-80 md:px-24 sm:px-12">
          <Fade
            direction="none"
            speed="0.6"
            delay="0.4"
            className="select-none 
                        text-4xl md:text-5xl lg:text-6xl
                        bg-opacity-80 bg-black
                        rounded-2xl border-double border-8
                        border-red-400 border-opacity-70
                        text-red-400 font-extralight">
            <div className="logo py-3">
              <b>
                W<span>A</span>RN<span>I</span>NG.
              </b>
            </div>
          </Fade>
        </div>
        <motion.div
          variants={variant}
          initial="hidden"
          animate={control}
          className="sm:pt-10 sm:pb-8 md:pt-14 md:pb-6 lg:pt-16 lg:pb-8">
          {typing && (
            <ReactTypingEffect
              text={visa.login_title2}
              speed="80"
              eraseSpeed="70"
              eraseDelay={10000000}
              cursor=" "
              displayTextRenderer={(text, i) => {
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

        <Fade
          direction="none"
          speed="1"
          delay="5"
          className="sm:px-5">
          <button
            type="button"
            className="bg-black lg:px-2 lg:py-2 sm:px-8 sm:py-2
                         lg:text-3xl sm:text-2xl
                         border-4 border-white rounded-3xl hover:scale-110
                         transition ease-in duration-200"
            onClick={() => {props.onClick("login")}}
          >
            
            {visa.login_prompt}
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default LoginScreen;
