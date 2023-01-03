import React from "react";
import Button from "../Button/Button";

const AddTimer = (props) => {
  return (
    <>
      <div
        className="flex flex-auto justify-center py-10
                   text-5xl font-black "
      >
        ADD VISA TIMER 
      </div>
      <ul className="flex flex-auto justify-center pl-0 mx-auto flex-wrap">
        {/* NEW USER */}
        <li>
          <Button
            id=""
            // onClick={props.newUser}
            className="my-3 mx-3 h-20 w-64 
                     bg-violet-700 text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
            message="1 MIN"
          />
        </li>

        {/* DELETE USER */}
        <li>
          <Button
            id=""
            // onClick={props.deleteUser}
            className="my-3 mx-3 h-20 w-64 
                     bg-violet-700 text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
            message="5 MINS "
          />
        </li>

        {/* ADD TIME */}
        <li>
          <Button
            id=""
            // onClick={props.addTimer}
            className="my-3 mx-3 h-20 w-64 
                     bg-violet-700 text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
            message="10 MINS"
          />
        </li>
      </ul>

      <div
        className="flex flex-auto justify-center pt-20
                   text-4xl font-black"
      >
        <Button
          id=""
          onClick={props.onLogout}
          className="my-3 mx-3 h-20 w-64 
                     bg-black text-white
                       rounded-3xl
                       text-xl font-bold"
          message="Logout"
        />
      </div>
    </>
  );
};

export default AddTimer;
