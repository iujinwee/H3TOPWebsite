import React, { useState } from "react";
import AddTimer from "./AddTimer";
import AdminPage from "./AdminPage";
import NewUser from "./NewUser";

const Admin = (props) => {
  const [page, setPage] = useState("adminpage");

  return (
    <div>
      {/* Main Admin Page */}
      {page === "adminpage" && (
        <AdminPage
          newUser={() => {
            setPage("newuser");
          }}
          addTimer={() => {
            setPage("addTimer");
          }}
          onLogout={props.onLogout}
        />
      )}

      {/* ADD USER */}
      {page === "newuser" && <NewUser onErr={props.onErr} onCancel={() => {setPage("adminpage")}}/>}

      {/* ADD TIMER */}
      {page === "addTimer" && <AddTimer onCancel={() => {setPage("adminpage")}}/>}


    </div>
  );
};

export default Admin;
