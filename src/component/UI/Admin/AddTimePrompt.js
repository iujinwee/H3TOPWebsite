import React from "react";
import Button from "../Button/Button";

const AddTimePrompt = (props) => {
  return (
    <div className="fixed z-30">
      <div
        className="flex flex-auto justify-center mx-10
                    bg-gray-800 bg-opacity-95 
                    border-4 border-black rounded-3xl"
      >
        <div className="align-middle m-auto text-white">  
          <div className="mt-8 text-3xl">{`${props.message} min(s) added`} </div>

          <ul className="flex flex-auto justify-center pl-0 mx-auto flex-wrap my-4">

            <li>
              <Button
                id=""
                onClick={props.onContinue}
                className="my-1 mx-3 h-14 w-44
                     bg-blue-600 bg-opacity-40
                       border-2 border-black rounded-3xl
                       text-lg font-semibold"
                message="Continue"
              />
            </li>
            <li>
              <Button
                id=""
                onClick={props.onExit}
                className="my-1 mx-3 h-14 w-44
                     bg-black
                       border-2 border-black rounded-3xl
                       text-lg font-semibold"
                message="Scan Another"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddTimePrompt;
