import React from "react";
import Home from "../../views/Home";
import Clans from "../../views/Clans";
import Team from "../../views/Team";
import Instructions from "../../views/Instructions";
import ClansDescriptions from "../../views/ClansDescriptions";
import Login from "../UI/Login/Login";
import Story from "../../views/Story";
import { Route, Routes } from "react-router-dom";
import Leaderboard from "../../views/Leaderboard";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/story" element={<Story/>}/>
      <Route path="/instructions" element={<Instructions/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/clans" element={<Clans/>}/>
      <Route path={`/clans/:id`} element={<ClansDescriptions/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
  );
};

export default Layout;
