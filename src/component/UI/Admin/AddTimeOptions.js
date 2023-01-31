import React, { useState } from "react";
import Button from "../Button/Button";
import AddTimePrompt from "./AddTimePrompt";

const AddTimeOptions = (props) => {
  const minute = 60 * 1000; // 1min = 60s * 1000ms
  const [prompt, setPrompt] = useState(false);

  return (
    <React.Fragment>
      <div className="mt-4 sm:text-base lg:text-xl mb-2">Select Amount of Time To Add.</div>
      <ul className="flex flex-auto justify-center pl-0 mx-auto flex-wrap lg:my-5 sm:my-1">
        {prompt && (
          <AddTimePrompt
            message={prompt}
            onContinue={() => {
              setPrompt(false);
            }}
            onExit={props.onExit}
          />
        )}

        <li>
          <Button
            id=""
            onClick={(event) => {
              event.preventDefault();
              setPrompt(1);
              props.onAdd(minute);
            }}
            className="my-2.5 mx-6 sm:h-16 lg:h-16 sm:w-40 lg:w-52
                     bg-violet-800 bg-opacity-60 text-white
                       border-2 border-black rounded-3xl
                       sm:text-base md:text-lg lg:text-xl font-bold"
            message="1 MIN"
          />
        </li>

        <li>
          <Button
            id=""
            onClick={(event) => {
              event.preventDefault();
              setPrompt(5);
              props.onAdd(5 * minute);
            }}
            className="my-2.5 mx-6 sm:h-16 lg:h-16 sm:w-40 lg:w-52
                     bg-violet-800 bg-opacity-60 text-white
                       border-2 border-black rounded-3xl
                       sm:text-base md:text-lg lg:text-xl font-bold"
            message="5 MINS "
          />
        </li>

        <li>
          <Button
            id=""
            onClick={(event) => {
              event.preventDefault();
              setPrompt(10);
              props.onAdd(10 * minute);
            }}
            className="my-2.5 mx-6 sm:h-16 lg:h-16 sm:w-40 lg:w-52
                     bg-violet-800 bg-opacity-60 text-white
                       border-2 border-black rounded-3xl
                       sm:text-base md:text-lg lg:text-xl font-bold"
            message="10 MINS"
          />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default AddTimeOptions;
