import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const AdminPage = (props) => {
  return (
    <Card
      className="flex flex-col m-auto justify-center text-center 
                bg-[rgb(63,22,32)] bg-opacity-60"
    >
      <div className="lg:text-4xl md:text-3xl sm:text-2xl font-black">
        ADMIN PAGE
      </div>
      <ul className="flex flex-auto justify-center pl-0 mx-auto mt-3 flex-wrap lg:text-lg md:text-lg sm:text-sm">
        {/* NEW USER */}
        <li>
          <Button
            id=""
            onClick={props.newUser}
            className="my-2 mx-4 sm:h-16 sm:w-48 lg:h-20 lg:w-56 
                      bg-[rgb(63,22,32)] bg-opacity-70 
                        hover:scale-105 hover:bg-[rgb(80,28,41)] text-white
                        border-2 border-black rounded-3xl font-bold"
            message="Create New User"
          />
        </li>

        {/* DELETE USER */}
        <li>
          <Button
            id=""
            onClick={props.deleteUser}
            className="my-2 mx-4 sm:h-16 sm:w-48 lg:h-20 lg:w-56 
                      bg-[rgb(63,22,32)] bg-opacity-70 
                        hover:scale-105 hover:bg-[rgb(80,28,41)] text-white
                        border-2 border-black rounded-3xl font-bold"
            message="Delete User"
          />
        </li>

        {/* ADD TIME */}
        <li>
          <Button
            id=""
            onClick={props.addTimer}
            className="my-2 mx-4 sm:h-16 sm:w-48 lg:h-20 lg:w-56 
                      bg-[rgb(63,22,32)] bg-opacity-70 
                        hover:scale-105 hover:bg-[rgb(80,28,41)] text-white
                        border-2 border-black rounded-3xl font-bold"
            message="Add Time"
          />
        </li>
      </ul>

      <div className="font-black">
        <Button
          id=""
          onClick={props.onLogout}
          className="mt-3 mx-4 sm:h-12 sm:w-28 lg:h-12 lg:w-40
                    bg-black hover:scale-105 hover:bg-[rgb(80,28,41)] text-white
                      border-2 border-black rounded-2xl font-bold"
          message="Logout"
        />
      </div>
    </Card>
  );
};

export default AdminPage;
