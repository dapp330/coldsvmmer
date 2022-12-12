import React from "react";
import "./App.css";
import "tachyons";
import "./image.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { NavbarComponent } from "./components/Headers/headers";
import { ContentComponent } from "./components/Content_Component";
import { Test } from "./components/test";
import { AboutPage } from "./components/about_page";
import { FooterComponent } from "./components/footer/footer";
import { GalleryComponent } from "./components/gallery_page";

const App = () => {
  return (
    <Router>
      <div class="flex flex-column">
        <div>
          <NavbarComponent />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<ContentComponent />} />
            <Route path="gallery" element={<GalleryComponent />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
        <div>
          <FooterComponent />
        </div>
      </div>
    </Router>
  );
};

export default App;
