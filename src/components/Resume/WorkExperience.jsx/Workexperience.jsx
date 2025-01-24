import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const workExperiences = [
  {
    title: "React Developer at Codify Software Services",
    date: "January 2023 - Present",
    roles: [
      "Developed and maintained React components.",
      "Collaborated with UI/UX designers to create responsive web applications.",
      "Integrated REST APIs for dynamic content updates.",
      "Implemented state management using Redux.",
      "Participated in daily Agile stand-up meetings.",
    ],
  },
];

export const Workexperience = () => {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">
          <strong>Working Experience</strong>
        </h5>
        {workExperiences.map((experience, index) => (
          <div key={index} className="mb-4">
            <div className="item-heading row align-items-center mb-2">
              <h6 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-2 fs-5 text-orange">
                {experience.title}
              </h6>
              <div className="col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                {experience.date}
              </div>
            </div>
            <ul className="list-unstyled">
              {experience.roles.map((role, roleIndex) => (
                <li
                  key={roleIndex}
                  className="d-flex align-items-start mb-2  mb-md-3"
                >
                  <BsCheck2Circle
                    className="text-orange me-2 flex-shrink-0"
                    size={20}
                  />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
