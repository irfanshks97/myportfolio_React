import { BsCheck2Circle } from "react-icons/bs";

const workExperiences = [
  {
    organisation: "Codify Software Services",
    title: "React Developer",
    date: "January 2023 - Present",
    domain: "Healthcare",
    project: "Pharmacy CRM",
    description:
      "The Pharmacy Management System is a comprehensive solution for medical distributors, featuring modules for Purchase Orders, Drug Sales, Stock Management, and Report Generation. It streamlines inventory management, sales processing, stock monitoring, and reporting, providing a user-friendly interface for efficient operations and data-driven decision-making.",
    roles: [
      "Develop and maintain responsive UIs using React.js, JavaScript, HTML5, and CSS3.",
      "Write reusable, testable, and efficient code.",
      "Build reusable React components and integrate RESTful APIs.",
      "Collaborate with back-end developers, designers, and other teams for seamless development.",
      "Implement state management using Redux.",
      "Use Git/GitHub for version control and JIRA for issue tracking in an Agile environment.",
    ],
  },
];

export const Workexperience = () => {
  return (
    <div className="container my-5">
      <h5 className="mb-4">
        <strong>Working Experience</strong>
      </h5>
      {workExperiences.map((experience, index) => (
        <div key={index} className="mb-4">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-8">
                <h6 className="card-title text-orange mb-2 fs-5">
                  {experience.organisation}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted fs-5">
                  {experience.title}
                </h6>
              </div>
              <div className="col-md-4 text-muted text-end">
                <small>{experience.date}</small>
              </div>
            </div>
            <p className="fw-bold m-0 mb-2">
              <span className="text-orange"> Project Name:</span>{" "}
              {experience.project}
            </p>
            <p className="fw-bold text-orange">Description:</p>
            <ul className="list-unstyled">
              {experience.roles.map((role, roleIndex) => (
                <li key={roleIndex} className="d-flex align-items-start mb-2">
                  <BsCheck2Circle className="text-orange me-2" size={20} />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
