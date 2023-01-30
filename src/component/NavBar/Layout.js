import React from "react";
import Home from "../../containers/Home";
import Clans from "../../containers/Clans";
import Team from "../../containers/Team";
import Instructions from "../../containers/Instructions";
import ClansDescriptions from "../../containers/ClansDescriptions";
import Login from "../UI/Login/Login";
import Story from "../../containers/Story";

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
