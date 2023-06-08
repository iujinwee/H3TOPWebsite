import React, { useState } from "react";
import AddTimer from "./AddTimer";
import AdminPage from "./AdminPage";
import DeleteUser from "./DeleteUser";
import NewUser from "./NewUser";

const Admin = (props) => {
  const [page, setPage] = useState("adminpage");

  return (
    <div className="lg:mt-20 md:mt-24 sm:-mt-10 overflow-auto">
      {/* Main Admin Page */}
      {page === "adminpage" && (
        <AdminPage
          newUser={() => {
            setPage("newuser");
          }}
          deleteUser={()=>{
            setPage("deleteuser")
          }}
          addTimer={() => {
            setPage("addTimer");
          }}
          onLogout={props.onLogout}
        />
      )}

      {/* ADD USER */}
      {page === "newuser" && <NewUser onErr={props.onErr} onCancel={() =>{setPage("adminpage")}}/>}
          
      {/* DELETE USER */}
      {page === "deleteuser" && <DeleteUser onErr={props.onErr} onCancel={() => {setPage("adminpage")}} onDelete={props.onLogout}/>}

      {/* ADD TIMER */}
      {page === "addTimer" && <AddTimer onCancel={() => {setPage("adminpage")}}/>}


    </div>
  );
};

export default Admin;
