import React from "react";
import Card from "../component/UI/Card/Card";
import CountdownTimer from "../component/UI/Countdown/CountdownTimer";
import { visa } from "../Content";
import Fade from "../component/Animation/Fade";

import "../component/UI/Countdown/CountdownTimer.css";
import Button from "../component/UI/Button/Button";

const Visa = (props) => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <div className="pt-5 m-0" id="visa" />
      <Fade
        direction="left"
        speed="2"
        delay="0.5"
        className="flex flex-auto justify-center align-middle
                   text-gray-200 text-center
                   pt-16 md:pt-20 lg:pt-20
                   text-3xl font-extrabold
                   md:text-4xl lg:text-5xl"
      >
        {visa.message}
      </Fade>

      {/* // Control size of timer box */}
      <div
        className="pt-0 px-0
                   md:px-20
                   lg:pt-20 lg:px-48"
      >
        <Card
          className="bg-contain border-zinc-900 border-8 
                     flex flex-auto justify-center align-middle"
        >
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </Card>
        
      </div>

      <div className="flex flex-col items-center align-middle m-auto
                      pt-5 mb-24">
        <Button
          id="clans"
          message= {visa.clans}
          className='select-none bg-gray-800 bg-opacity-70 
                    rounded-2xl border-solid border-purple-300 border-2 
                    hover:border-double hover:border-purple-500
                    text-sky-50 text-3xl font-bold 
                    px-4 py-4'
          />
      </div>  

      <div className="h-1/4"/>
    </>
  );
};

export default Visa;
