import React, { lazy, Suspense } from "react";
import "./App.css";
import "tachyons";
import "./image.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { NavbarComponent } from "./components/Headers/headers";
import { AboutPage } from "./components/about_page";
import { FooterComponent } from "./components/footer/footer";
import { GalleryComponent } from "./components/gallery_page";

const ContentComponent = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Content_Component")), 3000);
  });
});

const App = () => {
  return (
    <Router>
      <div className="flex flex-column">
        <Suspense
          fallback={
            <span
              className="center white mt7 center bl bt br bb"
              style={{ fontFamily: "dancing script", fontSize: "25vh" }}
            >
              ColdSvmmer
            </span>
          }
        >
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
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
