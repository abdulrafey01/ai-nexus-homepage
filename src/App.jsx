import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoSubtitle from "./components/Tools/VideoSubtitle";
import Test from "./components/Tools/Test";
import AffiliateDashboard from "./pages/AffiliateDashboard";
export default function App() {
  Aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/subtitle" element={<VideoSubtitle />} />
        <Route
          exact
          path="/affiliate-dashboard"
          element={<AffiliateDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}
