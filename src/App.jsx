import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoSubtitle from "./components/Tools/VideoSubtitle";
export default function App() {
  Aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/subtitle" element={<VideoSubtitle />} />
      </Routes>
    </BrowserRouter>
  );
}
