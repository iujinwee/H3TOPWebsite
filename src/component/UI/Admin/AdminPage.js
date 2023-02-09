import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const AdminPage = (props) => {
  return (
    <Card
      className="flex flex-col m-auto justify-center text-center 
                   bg-[rgb(73,15,69)] bg-opacity-60"
    >
      <div className="lg:text-5xl md:text-4xl sm:text-3xl font-black">
        ADMIN PAGE
      </div>
      <ul className="flex flex-auto justify-center pl-0 mx-auto mt-3 flex-wrap lg:text-xl md:text-xl sm:text-lg">
        {/* NEW USER */}
        <li>
          <Button
            id=""
            onClick={props.newUser}
            className="lg:my-3 sm:my-2 mx-3 h-20 w-56
                     bg-violet-700 bg-opacity-60 text-white
                       border-2 border-black rounded-3xl
                       font-bold"
            message="Create New User"
          />
        </li>

        {/* DELETE USER */}
        <li>
          <Button
            id=""
            onClick={props.deleteUser}
            className="lg:my-3 sm:my-2 mx-3 h-20 w-56
                     bg-violet-700 bg-opacity-60 text-white
                       border-2 border-black rounded-3xl
                       font-bold"
            message="Delete User"
          />
        </li>

        {/* ADD TIME */}
        <li>
          <Button
            id=""
            onClick={props.addTimer}
            className="lg:my-3 sm:my-2 mx-3 h-20 w-56
                     bg-violet-700 bg-opacity-60 text-white
                       border-2 border-black rounded-3xl
                       font-bold"
            message="Add Time"
          />
        </li>
      </ul>

      <div className="text-4xl font-black">
        <Button
          id=""
          onClick={props.onLogout}
          className="lg:my-3 sm:my-1 mx-3 h-16 w-40
                     bg-black text-white
                       rounded-3xl text-xl font-bold"
          message="Logout"
        />
      </div>
    </Card>
  );
};

export default AdminPage;
