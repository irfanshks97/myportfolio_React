import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Experience from "./Pages/Experience";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
