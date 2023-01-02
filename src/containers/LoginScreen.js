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
      className="h-screen flex flex-auto justify-center 
                 sm:px-36 md:px-72 lg:px-96"
    >
      <div className="text-center text-red-50 
                      text-4xl md:text-5xl lg:text-6xl">
          <Fade
            direction="none"
            speed="0.6"
            delay="0.4"
            className="select-none bg-opacity-80 bg-black
                        py-2 mb-12 
                        sm:px-8 md:px-12 lg:px-28
                        rounded-2xl border-double border-8
                        border-red-400 border-opacity-70
                        text-red-400 font-extralight">
            <div className="logo">
              <b>
                W<span>A</span>RN<span>I</span>NG.
              </b>
            </div>
          </Fade>

        <motion.div
          variants={variant}
          initial="hidden"
          animate={control}
          className="sm:h-64 md:h-48 lg:h-52">
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
                                font-outline-1
                                lg:text-5xl md:text-4xl sm:3xl">
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          className="lg:leading-relaxed leading-loose"
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
          delay="5">
          <button
            type="button"
            className="bg-black p-3 
                         text-3xl
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
