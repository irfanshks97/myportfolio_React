import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

export const ProfileSummary = () => {
  const data = [
    "Having 2.2 years of professional experience in Front-end Development using React.js.",
    "Experience in the development of Single Page Applications using React.js, JavaScript, HTML5, and CSS3.",
    "Understanding and well-versed in using JavaScript, including JavaScript features.",
    "Proficient in creating web applications using top-notch HTML5, CSS3, JavaScript, and Bootstrap.",
    "Proficiency in building responsive and mobile-optimized websites.",
    "Experience using Git for version control and tools like Git Bash.",
    "Experience with defect tracking tools such as JIRA.",
    "A highly motivated self-starter who is organized, committed, hardworking, goal-oriented, and eager to learn new things.",
  ];
  return (
    <div className="profile-summary">
      <h5 className="mb-4">
        <strong>Profile Summary</strong>
      </h5>
      <ul className="list-unstyled mb-5">
        {data.map((item, index) => (
          <li key={index} className="d-flex align-items-start mb-3">
            <span>
              <BsCheck2Circle
                className="text-orange me-2 check-circle"
                size={20}
              />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
