import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Form = (props) => {
  return (
    <form
      className={`text-white border-black border-2 bg-slate-800 rounded-xl
        m-auto absolute inset-x-1 z-10 sm:w-10/12 w-3/12 text-center 
        ${props.containerClassName}`}
      onSubmit={props.submitHandler}
    >
      <div
        className={`bg-[rgb(63,22,32)] bg-opacity-70 
            text-base py-3 rounded-xl ${props.headerClassName}`}
      >
        {props.header}
        <FontAwesomeIcon
          icon={solid("xmark-square")}
          onClick={() => {
            props.onCancel();
          }}
          className="h-6 hover:scale-110
                    text-gray-300 
                    absolute top-3 right-4"
        />
      </div>
      <div className={`py-3 ${props.contentClassName}`}>{props.content}</div>
      <div className={`${props.footerClassName}`}>{props.footer}</div>
    </form>
  );
};

export default Form;
