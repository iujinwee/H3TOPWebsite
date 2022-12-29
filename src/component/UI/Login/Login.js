import { motion } from "framer-motion";
import React, { useState } from "react";
import LoginScreen from "../../../containers/LoginScreen";
import Visa from "../../../containers/Visa";
import Fade from "../../Animation/Fade";
import LoginForm from "./LoginForm";
import useScrollLock from "../../Hooks/ScrollLock/useScrollLock";

const Login = (props) => {
  const [page, setPage] = useState("loginscreen");

  const clickHandler = () => {
    setPage("loginform");
  };

  const submitHandler = () => {
    setPage("visa");
  };

  const variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <div className={`pt-32 h-screen ${page==="loginform"? "backdrop-blur-xl" : "backdrop-blur-none"}`} id="login">
      <motion.div variants={variant} initial="hidden" animate="show" >
        {page === "loginscreen" && <LoginScreen onClick={clickHandler} />}
        {page === "loginform" && (
          <Fade
            direction="none"
            speed="0.01"
            delay="0"
            className="">
            <LoginForm onClick={submitHandler} />
          </Fade>
        )}
        {page === "visa" && <Visa />}
      </motion.div>
    </div>
  );
};

export default Login;
