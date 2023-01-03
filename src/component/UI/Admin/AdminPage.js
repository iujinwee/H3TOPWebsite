import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const AdminPage = (props) => {
  return (
    <Card className="flex flex-col m-auto justify-center text-center">
      <div className="text-5xl font-black">ADMIN PAGE</div>
      <ul className="flex flex-auto justify-center pl-0 mx-auto mt-3 flex-wrap">
        {/* NEW USER */}
        <li>
          <Button
            id=""
            onClick={props.newUser}
            className="my-3 mx-3 h-20 w-64 
                     bg-violet-700 text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
            message="Create New User"
          />
        </li>

        {/* DELETE USER */}
        <li>
          <Button
            id=""
            onClick={props.deleteUser}
            className="my-3 mx-3 h-20 w-64 
                     bg-violet-700 text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
            message="Delete User"
          />
        </li>

        {/* ADD TIME */}
        <li>
          <Button
            id=""
            onClick={props.addTimer}
            className="my-3 mx-3 h-20 w-64 
                     bg-violet-700 text-white
                       border-2 border-black rounded-3xl
                       text-xl font-bold"
            message="Add Time"
          />
        </li>
      </ul>

      <div className="text-4xl font-black">
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
    </Card>
  );
};

export default AdminPage;
