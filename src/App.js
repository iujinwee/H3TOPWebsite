import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Layout from "./component/NavBar/Layout";

function App() {
  return (
    <Router>
      <div className="relative">
        <NavBar />
        <Layout />
      </div>
    </Router>
  );
}

export default App;
