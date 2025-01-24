import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <div className="row">
          {/* Sidebar */}

          <Sidebar />

          {/* Main Content */}
          <main className="col-12 ms-sm-auto col-lg-9 px-3 px-lg-4 m-0">
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
