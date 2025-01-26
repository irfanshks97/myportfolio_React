import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FiUser, FiBriefcase, FiFileText, FiRss, FiMail } from "react-icons/fi";
import { BsFillLaptopFill, BsWhatsapp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Irfan_Image from "../../assets/images/Irfan_Image.jpg";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <div className="row m-0">
      <header className="header text-center col-xl-2 col-lg-3">
        <div className="force-overflow">
          <h1 className="blog-name pt-lg-4 mb-0">
            <a className="no-text-decoration" href="/">
              Irfan Shaikh
            </a>
          </h1>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navigation"
              className={`navbar-collapse flex-column collapse ${
                isCollapsed ? "" : "show"
              }`}
            >
              <div className="profile-section pt-3 pt-lg-0">
                <img
                  className="profile-image mb-3 rounded-circle mx-auto"
                  src={Irfan_Image}
                  alt="profile"
                />
                <div className="bio mb-3">
                  Hi, my name is Shaikh Irfan! I'm a passionate frontend
                  developer specializing in React.js with over 2 years of
                  professional experience.
                </div>

                <ul className="social-list list-inline py-2 mx-auto">
                  <li className="list-inline-item d-xl-none">
                    <a
                      href="https://www.facebook.com/p/Er-Shaikh-100014528709145/"
                      className="text-orange"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/irfanshks97/"
                      className="text-orange"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/irfanshks97/"
                      className="text-orange"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubAlt />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/er.shaikh67"
                      className="text-orange"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://wa.me/9860338964"
                      className="text-orange"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsWhatsapp />
                    </a>
                  </li>
                </ul>
                <hr />
                <ul className="navbar-nav flex-column text-start">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/"
                      onClick={handleLinkClick}
                    >
                      <FiUser className="me-2" /> About Me
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/portfolio"
                      onClick={handleLinkClick}
                    >
                      <BsFillLaptopFill className="me-2" /> Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/experience"
                      onClick={handleLinkClick}
                    >
                      <FiBriefcase className="me-2" /> Experience
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/education"
                      onClick={handleLinkClick}
                    >
                      <FiBriefcase className="me-2" /> Education
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/resume"
                      onClick={handleLinkClick}
                    >
                      <FiFileText className="me-2" /> Resume
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/blog"
                      onClick={handleLinkClick}
                    >
                      <FiRss className="me-2" /> Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      to="/contact"
                      onClick={handleLinkClick}
                    >
                      <FiMail className="me-2" /> Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
