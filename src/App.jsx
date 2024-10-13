import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/common/Layout";
import Home from "./pages/Home/Home";
import GameFinder from "./pages/GameFinder/GameFinder";
import Dashboard from "./pages/DashBoard.jsx/Dashboard";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Games from "./pages/Games/Games";
import GameSetup from "./pages/GameSetup/GameSetup";
import GamesDetails from "./pages/GamesDetails/GamesDetails";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/gamefinder" element={<GameFinder />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/what-are-ttrgs" element={<Games />} />
          {/* <Route path="/gamemaster-help" element={<GameSetup />} /> */}
          {/* <Route path="/gamecard" element={<GamesDetails />} /> */}
        </Routes>
      </Layout>
    </>
  );
};

export default App;
