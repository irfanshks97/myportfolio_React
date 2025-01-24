import {
  FaLinkedinIn,
  FaGithubAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FiUser, FiBriefcase, FiFileText, FiRss, FiMail } from "react-icons/fi";

import Irfan_Image from "../../assets/images/Irfan_Image.jpg";
import { BsFillLaptopFill, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="">
      <header className="header text-center">
        <div className="force-overflow">
          <h1 className="blog-name pt-lg-4 mb-0">
            <a className="no-text-decoration" href="/">
              Irfan shaikh
            </a>
          </h1>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navigation"
              className="navbar-collapse flex-column collapse show"
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
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/p/Er-Shaikh-100014528709145/"
                      className="text-orange"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/irfanshks97/"
                      className="text-orange"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/irfanshks97/"
                      className="text-orange"
                    >
                      <FaGithubAlt />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/er.shaikh67"
                      className="text-orange"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://wa.me/9860338964" className="text-orange">
                      <BsWhatsapp />
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
              <ul className="navbar-nav flex-column text-start">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    <FiUser className="me-2" /> About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">
                    <BsFillLaptopFill className="me-2" /> Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience">
                    <FiBriefcase className="me-2" /> Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education">
                    <FiBriefcase className="me-2" /> Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume">
                    <FiFileText className="me-2" /> Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    <FiRss className="me-2" /> Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <FiMail className="me-2" /> Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
