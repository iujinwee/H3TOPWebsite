import React, { useEffect, useState } from "react";
import Card from "../component/UI/Card/Card";
import CountdownTimer from "../component/UI/Countdown/CountdownTimer";
import Fade from "../component/Animation/Fade";
import Button from "../component/UI/Button/Button";

import { visa } from "../Content";
import "../component/UI/Countdown/CountdownTimer.css";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import FunctionalButton from "../component/UI/Button/FunctionalButton";

const Visa = (props) => {
  // RETRIEVE TIME LEFT FROM UID
  const userID = props.userdata.uid;
  const docRef = doc(firestore, "VisaTimer", userID);

  // Visa
  const clansClickHandler = () => {
    const element = document.getElementById("clans_start");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Save Timer Data
  const [resultTimer, setResultTimer] = useState(-1);

  // Refresh Timer
  function refreshTimer() {
    const TARGET_DATE = new Date("2/15/2023").getTime(); // DD/MM/YYYY FORMAT

    getDoc(docRef).then((res) => {
      const init_duration = res.data().init_duration; // BEGIN WITH 1 HR
      const bonus_time = res.data().bonus_time;

      setResultTimer(TARGET_DATE - init_duration + bonus_time);
    });
  }

  // Refresh whenever time is added or timer is refreshed
  useEffect(() => {
    const timerID = setInterval(refreshTimer, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <>
      <div className="sm:pt-16 lg:pt-0 m-0" id="visa" key="visa" />
      <Fade
        direction="left"
        speed="2"
        delay="0.5"
        className="flex flex-auto justify-center align-middle
                    text-gray-200 text-center
                    text-3xl md:text-4xl lg:text-5xl
                    font-extrabold font-outline-0-5 font-blackopsone"
      >
        {visa.message}
      </Fade>


      {/* // Control size of timer box */}
      <div
        className="xs:pt-0 xs:px-10
                    sm:pt-0 sm:px-0
                    md:pt-0 md:px-16
                    lg:pt-0 lg:px-32"
      >
        <Card
          id="none"
          className="bg-contain border-zinc-900 border-8 
                     my-4 bg-[rgb(50,44,47)] bg-opacity-60
                     flex justify-center align-middle"
        >
          {resultTimer !== -1 ? (
            <CountdownTimer targetDate={resultTimer} />
          ) : (
            <div className="text-5xl"> LOADING </div>
          )}
        </Card>

        {/* LOGOUT BUTTON */}
        <div
          className="grid grid-cols-6
                     mx-10"
        >
          <FunctionalButton
            message="Add Time"
            className="col-start-1 col-span-2"
            onClick={() => {props.onAddTimer(userID)}}
          />
          <FunctionalButton
            message="Logout"
            className="col-start-5 col-span-2"
            onClick={props.onLogout}
          />
        </div>
      </div>

      {/* CLAN REDIRECT BUTTON */}
      <div
        className="flex flex-col items-center align-middle m-auto
                      pt-3 mb-24"
      >
        <Button
          id="clans"
          onClick={clansClickHandler}
          message={visa.clans}
          className="select-none bg-gray-800 bg-opacity-70 
                    rounded-2xl border-solid border-purple-300 border-2 
                    hover:border-double hover:border-purple-500
                    text-sky-50 font-bold 
                    text-2xl 
                    px-4 py-4"
        />
      </div>

    </>
  );
};

export default Visa;
