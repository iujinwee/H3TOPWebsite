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

const Login = (props) => {
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
    <ParallaxBanner className="h-screen scale-105">
      <div id="login" key="login" className="relative lg:-top-16 sm:-top-64"/>
      <div id="login_start" key="login_start" className="relative -top-12" />
      <ParallaxBannerLayer
        image={bg}
        speed={20}
        style={{
          "background-position-y": "0%",
          "@media (max-width: 768px) backgroundSize": "93%",
        }}
      />
      <ParallaxBannerLayer>
        <div
          className={`font-audiowide ${
            page === "loginform" ? "backdrop-blur-xl" : "backdrop-blur-none"
          }`}
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
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Login;
