import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import LoginScreen from "../../../containers/LoginScreen";
import Visa from "../../../containers/Visa";
import LoginForm from "./LoginForm";
import Fade from "../../Animation/Fade";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { getAuth, signOut } from "firebase/auth";
import ErrorMsg from "../Error/ErrorMsg";
import Admin from "../Admin/Admin";

const Login = (props) => {
  const [page, setPage] = useState("loginscreen");
  const [user, loading, error] = useAuthState(auth);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      <div>Loading</div>;
    }
    if (error) {
      <div>No User</div>;
    }
    if (user) {
      // ADMIN USER
      if (user.uid === "52f1E0I76SgcE8jg0ZT1ukOGPdx2") {
        setPage("admin");
      } else {
        setPage("visa");
      }
    }
  }, [user, loading, error]);

  // Sign Out
  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setPage("loginscreen");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // For transition
  const variant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <div
      className={`pt-32 h-screen ${
        page === "loginform" ? "backdrop-blur-xl" : "backdrop-blur-none"
      }`}
      id="login"
    >
      <motion.div variants={variant} initial="hidden" animate="show">
        {page === "loginscreen" && (
          <LoginScreen
            onClick={() => {
              setPage("loginform");
            }}
          />
        )}

        {err && (
          <ErrorMsg
            message={err}
            acknowledge={() => {
              setErr(false);
            }}
          />
        )}

        {page === "loginform" && (
          <Fade direction="none" speed="0.01" delay="0" className="">
            <LoginForm
              onErr={(error) => {
                setErr(error);
              }}
              onCancel={() => {
                setPage("loginscreen");
              }}
            />
          </Fade>
        )}

        {page === "visa" && <Visa onLogout={logoutHandler} userdata={user} />}

        {page === "admin" && (
          <Admin
            onErr={(error) => {
              setErr(error);
            }}
            onLogout={() => {
              logoutHandler();
              setPage("loginscreen");
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Login;
