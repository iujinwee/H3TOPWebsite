import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { firestore } from "../../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const LoginForm = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const newData = collection(firestore, "users");

  const submitHandler = async (event) => {
    event.preventDefault();

    const userDetails = {
      id: username,
      pw: password,
    };
    
    props.onClick(true);

    // Save to database
    try {
      addDoc(newData, userDetails);
    } catch (event) {
      console.log(event);
    }

    setPassword("");
    setUsername("");
    event.target.reset();
  };

//   const Auth = getAuth();
//   signInWithEmailAndPassword(auth, username, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });


  return (
    <form
      className="m-auto px-10 py-16
                    bg-slate-800 opacity-80
                    border-2 border-black rounded-3xl
                    text-white"
      onSubmit={submitHandler}
    >
      <div className="text-center pb-3 text-2xl">
        <span>LOGIN</span>
      </div>

      <div className="my-2">
        <div>Clan:</div>
        <input
          className="text-black px-1"
          id="clan_id"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>

      <div>
        <div>Passcode:</div>
        <input
          className="text-black px-1 h-7 si"
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
