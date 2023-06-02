import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import Form from "../Form/Form";

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
    <Form 
      submitHandler = {submitHandler}
      onCancel = {props.onCancel}
      containerClassName="top-10"
      headerClassName="bg-indigo-900"
      className="bg-indigo-800"
      header={<h1>Login Page</h1>}
      content={
        <div className="flex flex-col mx-3 my-2 text-right">
          <div className="flex flex-row mb-3">
            <div className="mr-4 w-40">Clan ID:</div>
            <input
              required
              className="text-black px-1 h-7 rounded-md w-full"
              id="clan_id"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="mb-3 flex flex-row">
            <div className="mr-4 w-40">Passcode:</div>
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

          <div className="text-right">
            <input
              type="checkbox"
              onClick={() => {
                setPasswordShown(!passwordShown);
              }}
              className="text-black"
            />
            <span className="px-2 align-middle text-sm">Show Password</span>
          </div>
        </div>
      }
      footer={
          <Button 
            className="border-slate-300 hover:border-slate-300
              bg-indigo-900 hover:bg-indigo-700 mb-3" 
            type="submit">
          Login
        </Button>
      }
    />
  );
};

export default LoginForm;
