import { motion } from "framer-motion";
import React, { useState } from "react";
import LoginScreen from "../../../containers/LoginScreen";
import Visa from "../../../containers/Visa";
import LoginForm from "./LoginForm";

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
    <div className="pt-32 h-screen" id="login">
      <motion.div variants={variant} initial="hidden" animate="show">
        {page === "loginscreen" && <LoginScreen onClick={clickHandler} />}
        {page === "loginform" && <LoginForm onClick={submitHandler} />}
        {page === "visa" && <Visa />}
      </motion.div>
    </div>
  );
};

export default Login;
