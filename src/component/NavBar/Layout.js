import React from "react";
import Home from "../../views/Home";
import Clans from "../../views/Clans";
import Team from "../../views/Team";
import Instructions from "../../views/Instructions";
import ClansDescriptions from "../../views/ClansDescriptions";
import Login from "../UI/Login/Login";
import Story from "../../views/Story";

import { AnimatePresence } from "framer-motion";

const Layout = () => {
  return (
    <AnimatePresence>
      <div className="overflow-x-hidden">
        <Home key="home" />
        <Story key="story" />
        <Instructions key="instructions" />
        <Login key="login" />
        <Clans key="clans" />
        <ClansDescriptions key="clansdesc" />
        <Team key="team" />
      </div>
      {/* <Albums
        key="albums" /> */}
    </AnimatePresence>
  );
};

export default Layout;
