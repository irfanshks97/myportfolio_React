import { BsCheck2Circle } from "react-icons/bs";

const projects = [
  {
    title: "Pharmacy CRM",
    client: "MED+",
    duration: "Apr 2023 - Present",
    role: "React Developer",
    description:
      "The Pharmacy Management System is a comprehensive solution tailored for medical distributors to efficiently manage and automate their business processes. This system integrates four key modules: purchase orders, drug sales, inventory management, and detailed report generation. By streamlining these operations, the system ensures real-time tracking, accurate stock maintenance, and seamless transaction management. With a focus on usability, the system offers an intuitive interface that simplifies navigation and enhances user productivity. Its robust design empowers distributors to minimize manual efforts, reduce errors, and make data-driven decisions for improved operational efficiency.",
    environment: "React, JavaScript, Bootstrap, Redux, HTML5, CSS3, GIT",
    responsibilities: [
      "Attended daily stand-up scrum meetings to discuss progress and plans.",
      "Wrote reusable, testable, and efficient code.",
      "Developed client-side functionality, including purchase order forms, dropdown menus, toggles, and search bars using Bootstrap.",
      "Built front-end components using React.",
      "Implemented AJAX requests, React Hooks, and API integration for efficient communication between the front-end and back-end.",
      "Utilized JIRA to track and manage bugs, ensuring minimal downtime and maximizing productivity.",
    ],
  },
];

const ProjectSummary = () => {
  return (
    <>
      <div className="row">
        <h5 className="mb-4">
          <strong>Projects Summary</strong>
        </h5>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="item-heading row align-items-center mb-2">
              <h6 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-2 fs-5 text-orange">
                {project.title}
              </h6>
              <div className="col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                {project.duration}
              </div>
            </div>
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Role:</strong> {project.role}
            </p>
            <p>
              <strong>Project Description:</strong> {project.description}
            </p>
            <p>
              <strong>Environment:</strong> {project.environment}
            </p>
            <h6 className="mb-3">
              <strong>Roles and Responsibilities:</strong>
            </h6>
            <ul className="list-unstyled">
              {project.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2 mb-md-3">
                  <BsCheck2Circle
                    className="text-orange me-2 flex-shrink-0"
                    size={20}
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSummary;
