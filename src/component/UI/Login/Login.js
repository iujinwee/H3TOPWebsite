import React from "react";
import LoginForm from "./LoginForm";

const Login = (props) => {


  return (
    <div
      id="login"
      key="login"
      className="flex flex-auto items-center justify-center h-screen
                    backdrop-blur"
    >
      <LoginForm/>
    </div>
  );
};

export default Login;
