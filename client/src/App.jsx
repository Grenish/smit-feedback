import React from "react";
import { Faculty, Tabs, Profile, Newsfeed } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Tabs />
      <Routes>
        <Route path="/" element={<Newsfeed />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
