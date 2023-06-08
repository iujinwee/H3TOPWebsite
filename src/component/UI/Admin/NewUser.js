import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";

const NewUser = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [player, setPlayer] = useState(false);

  // Check Sign in for user
  const submitHandler = async (event) => {
    event.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        // Create document for new user
        setDoc(doc(firestore, "VisaTimer", user.uid), {
          id: user.uid,
          email: user.email,
          clanName: name,
          amazingRace: 0,
          captureTheFlag: 0,
          woh3: 0,
          sideQuests: 0,
          totalScore: 0,
          init_duration: 86400000,
          isPlayer: player,
        });

        alert("New Account Created");
      })
      .catch((err) => {
        // Error Handling
        const errMsg = err.code;
        props.onErr(errMsg);
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
        <span>NEW ACCOUNT</span>
      </div>

      <div className="my-2">
        <div>Clan Name:</div>
        <input
          required
          className="text-black px-1"
          id="clan_name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>

      <div className="my-2">
        <div>Clan Email:</div>
        <input
          required
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
          required
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

      <div className="mb-2">
        <input
          type="checkbox"
          onClick={() => {
            setPlayer(!player);
          }}
          />
        <span className="px-2 align-middle text-sm">Player</span>
      </div>

      <Button className="my-2" type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewUser;
