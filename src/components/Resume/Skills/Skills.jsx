import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const TechnicalSkills = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h5 className="mb-4">
          <strong>Technical Skills</strong>
        </h5>

        <div className="col-12 mb-3">
          <h6 className="text-orange mb-2">
            <strong>Skills</strong>
          </h6>
          <div className="row">
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>HTML5, CSS3</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>React.js</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>Redux.js</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>Axios, Ajax</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>Bootstrap</span>
              </div>
            </div>
            {/* Third Row */}
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>Git, GitHub</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>Visual Studio Code</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-2">
              <div className="d-flex align-items-center">
                <span>
                  <BsCheck2Circle className="text-orange me-2" size={18} />
                </span>
                <span>JIRA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
