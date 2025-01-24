import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { LiaLinkedin } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaGlobe,
  FaEnvelope,
  FaFilePdf,
  FaFileDownload,
  FaFile,
} from "react-icons/fa";
import irfanImage from "../IrfanImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileSummary } from "../ProfileSummary/ProfileSummary";
import { Workexperience } from "../WorkExperience.jsx/Workexperience";
import TechnicalSkills from "../Skills/Skills";
import ProjectSummary from "../Proejcts/ResumeProjects";
import Footer from "../Footer/Footer";
import Qualification from "../Qulifications/Qualifications";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { FaFilePen } from "react-icons/fa6";

export const ResumeHeader = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="container-fluid ps-lg-3">
      <div className="text-center p-5">
        {" "}
        <button className="btn btn-orange">
          <FaFilePen size={20} /> <span>This is Online Version Resume</span>
        </button>
      </div>
      <div
        className={`container mx-auto p-5 m-5 shadow rounded ${
          darkTheme ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="d-flex justify-content-end align-items-center mb-3 ">
          <h6
            className={`mb-0 me-3 mt-1 ${
              darkTheme ? "text-light" : "text-orange"
            }`}
          >{`${
            darkTheme ? "Click for Light Mode" : "Click for Dark Mode "
          }`}</h6>
          <div className="form-switch">
            <input
              className="form-check-input  fs-5 switch-button-container"
              type="checkbox"
              onChange={toggleChange}
            />
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 col-lg-8 col-xl-9">
            <img
              src={irfanImage}
              alt="Irfan Shaikh"
              className="rounded-circle mb-3"
              width="100px"
            />
            <h2 className="text-uppercase">Irfan Shaikh</h2>
            <div className="mb-3">Frontend Web Developer / React developer</div>
            <strong className="text-orange fs-5">Immediate Joiner</strong>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <ul className="list-unstyled mt-md-0 mt-2">
              <li className={`mb-2 ${darkTheme ? "text-light" : "text-dark"}`}>
                <span>
                  <BiPhoneCall size={20} />
                </span>
                <a
                  href="tel:9860338964"
                  className={`ms-2 ${darkTheme ? "text-light" : "text-dark"}`}
                >
                  9860338964
                </a>
              </li>
              <li className={`mb-2 ${darkTheme ? "text-light" : "text-dark"}`}>
                <span>
                  <LiaLinkedin size={20} />
                </span>
                <a
                  href="https://www.linkedin.com/in/irfanshk67"
                  target="_blank"
                  className={`ms-2 ${darkTheme ? "text-light" : "text-dark"}`}
                >
                  linkedin.com/in/shkirfan67
                </a>
              </li>
              <li className={`mb-2 ${darkTheme ? "text-light" : "text-dark"}`}>
                <span>
                  <FaGlobe size={20} />
                </span>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className={`ms-2 ${darkTheme ? "text-light" : "text-dark"}`}
                >
                  www.google.com
                </a>
              </li>
              <li className={`mb-2 ${darkTheme ? "text-light" : "text-dark"}`}>
                <span>
                  <FaEnvelope size={20} />
                </span>
                <a
                  href="mailto:shkirfan67@gmail.com"
                  className={`ms-2 ${darkTheme ? "text-light" : "text-dark"}`}
                >
                  shkirfan67@gmail.com
                </a>
              </li>
              <li className={`${darkTheme ? "text-light" : "text-dark"}`}>
                <span>
                  <IoLocationSharp size={20} />
                </span>
                <span className="ms-2">Pune, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <ProfileSummary />
        <hr />
        <Workexperience />
        <hr />
        <TechnicalSkills />
        <hr />
        <ProjectSummary />
        <hr />
        <Qualification />
        <hr />
        <PersonalDetails />
        <hr />
        <Footer theme={darkTheme} />
      </div>
    </div>
  );
};
