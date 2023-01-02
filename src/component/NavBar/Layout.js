import React from "react";
import Home from "../../containers/Home";
import Clans from "../../containers/Clans";
import Team from "../../containers/Team";
import Albums from "../../containers/Albums";
import Instructions from "../../containers/Instructions";
import ClansDescriptions from "../../containers/ClansDescriptions";
import Login from "../UI/Login/Login";

import Story from "../../containers/Story";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  return (
    <AnimatePresence>
      <Home 
        key="home" />
      <Story 
        key="story" />
      <Instructions 
        key="instructions" />
      <Login 
        key="login" />
      <Clans
        key="clans" />
      <ClansDescriptions
        key="clansdesc" />
      <Team
        key="team" />
      <Albums
        key="albums" />
    </AnimatePresence>
  );
};

export default Layout;
