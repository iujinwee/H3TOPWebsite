import React, { useEffect, useState } from "react";
import { visa } from "../Content";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import CountdownTimer from "../component/UI/Countdown/CountdownTimer";
import Fade from "../component/Animation/Fade";
import Card from "../component/UI/Card/Card";
import FunctionalButton from "../component/UI/Button/FunctionalButton";
import NeonButton from "../component/UI/Button/NeonButton";
import "../component/UI/Countdown/CountdownTimer.css";

const Visa = (props) => {
  // RETRIEVE TIME LEFT FROM UID
  const userID = props.userdata.uid;
  const docRef = doc(firestore, "VisaTimer", userID);

  // Save Timer Data
  const [resultTimer, setResultTimer] = useState(-1);

  // Refresh Timer
  function refreshTimer() {
    const TARGET_DATE = new Date("2/15/2024").getTime(); // DD/MM/YYYY FORMAT

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
    <ParallaxBanner className="h-screen">
      <ParallaxBannerLayer className="h-screen overflow-auto">
        <Fade
          direction="left"
          speed="2"
          delay="0.5"
          className="flex flex-auto justify-center align-middle
                      text-gray-200 text-center px-10 
                      sm:text-3xl md:text-4xl lg:text-5xl
                      font-extrabold font-outline-0-1 font-blackopsone"
        >
          {visa.message}
        </Fade>

        {/* // Control size of timer box */}
        <div
          className="xs:pt-0 xs:px-10
                      sm:pt-2 sm:px-0
                      md:pt-0 md:px-16
                      lg:pt-0 lg:px-32"
        >
          <Card
            id="none"
            className="bg-contain border-[rgb(0,0,0)] border-4
                      my-4 bg-[rgb(63,22,32)] bg-opacity-60 
                      flex justify-center align-middle"
          >
            {resultTimer !== -1 ? (
              <CountdownTimer targetDate={resultTimer} />
            ) : (
              <div className="text-2xl"> LOADING </div>
            )}
          </Card>

          {/* LOGOUT BUTTON */}
          <div
            className="grid grid-cols-6 gap-0
                      mx-6 mb-2"
          >
            <FunctionalButton
              message="Add Time"
              className="col-start-1 col-span-2"
              onClick={() => {
                props.onAddTimer(userID);
              }}
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
                    lg:pt-3 md:pt-5 sm:pt-5 mb-24"
        >
          <Link to="/clans">
            <NeonButton>
              <b>
                Le<span>a</span>rn abo<span>u</span>t you<span>r</span> Clan!
              </b>
            </NeonButton>
          </Link>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Visa;
