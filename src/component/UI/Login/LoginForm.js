import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const LoginForm = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // Check Sign in for user
  const submitHandler = async (event) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredentials) => {        
      })
      .catch((err) => {
        // Error Handling
        props.onErr(err.code);
      });

    event.target.reset();
  };

  return (
    <form
      className="m-auto w-80 
                sm:px-8 md:px-9 lg:px-10 
                sm:pb-8 md:pb-9 lg:pb-10 
                sm:pt-7 md:pt-8 lg:pt-9
                bg-slate-800 opacity-80
                border-2 border-black rounded-3xl
                text-white"
      onSubmit={submitHandler}
    >
      {/* CANCEL ICON */}
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={solid("xmark-square")}
          onClick={props.onCancel}
          className="scale-125 hover:scale-150 mb-1 
                     pl-20 hover:pl-10 pb-2
                     text-gray-300 h-5 w-5"
        />
      </div>  

      {/* LOGIN FORM */}
      <div className="text-center pb-3 text-2xl">
        <span>LOGIN</span>
      </div>

      <div className="my-2">
        <div>Clan:</div>
        <input
          required
          className="text-black px-1 h-7 rounded-md w-full"
          id="clan_id"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>

      <div className="my-2">
        <div>Passcode:</div>
        <input
          required
          className="text-black px-1 h-7 rounded-md w-full"
          type={passwordShown ? "text" : "password"}
          id="passcode"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <div className="my-2">
        <input
          type="checkbox"
          onClick={() => {
            setPasswordShown(!passwordShown);
          }}
          className="text-black"
        />
        <span className="px-2 align-middle text-sm">Show Password</span>
      </div>

      <Button className="my-2" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
