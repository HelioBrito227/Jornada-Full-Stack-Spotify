import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Artist from "./pages/Artist/Artist.jsx";
import Artists from "./pages/Artists/Artists.jsx";
import Song from "./pages/Song/Song.jsx";
import Songs from "./pages/Songs/Songs.jsx";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/song/:id" element={<Song />} />
    </Routes>
  );
};

export default RoutesComponent;
