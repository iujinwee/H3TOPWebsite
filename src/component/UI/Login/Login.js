import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import LoginScreen from "../../../views/LoginScreen";
import Visa from "../../../views/Visa";
import LoginForm from "./LoginForm";
import Fade from "../../Animation/Fade";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { getAuth, signOut } from "firebase/auth";
import ErrorMsg from "../Error/ErrorMsg";
import Admin from "../Admin/Admin";
import QRCode from "../QRCode/QRCode";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import bg from "../../../images/background.png";

const Login = () => {
  const [page, setPage] = useState("loginscreen");
  const [user, loading, error] = useAuthState(auth);
  const [err, setErr] = useState(false);
  const [docRef, setDocRef] = useState("");

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
        setErr(error);
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
    <ParallaxBanner className="h-screen">
      <ParallaxBannerLayer
        image={bg}
      />
      <ParallaxBannerLayer 
        className={`pt-40 h-screen font-audiowide overflow-auto flex flex-col ${
          page === "loginform" ? "backdrop-blur-md" : "backdrop-blur-none"
      }`}>
        <motion.div 
          variants={variant} 
          initial="hidden" 
          animate="show" 
          className="relative">
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

          {page === "visa" && (
            <Visa
              onLogout={logoutHandler}
              userdata={user}
              onAddTimer={(doc) => {
                setDocRef(doc);
                setPage("scanQR");
              }}
            />
          )}

          {page === "scanQR" && (
            <QRCode
              url={docRef}
              onAcknowledge={() => {
                setPage("visa");
              }}
            />
          )}

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
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Login;
