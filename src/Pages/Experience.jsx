import { FaBuilding, FaMapMarkerAlt, FaClock, FaTasks } from "react-icons/fa";

export const EducationAndExperience = () => {
  const data = [
    {
      id: 1,
      role: "Frontend Development / React Development",
      organisation: "Codify Software Services",
      startDate: "January, 2023",
      endDate: "Present",
      location:
        "602, 5th Floor, Dangat Patil Empire, Near Navale Bridge, Vadgaon Bk, Pune-411041, MH, India",
      project: {
        name: "Pharmacy CRM",
        domain: "Healthcare",
        description:
          "Worked on a Pharmacy CRM project designed for the healthcare domain. The project involved developing a comprehensive purchase order module to streamline supplier management, automate inventory tracking, and enhance order processing efficiency.",
      },
      experiences: [
        "Hands-on experience in building reusable and modular components using React.js.",
        "Experience creating responsive designs that work seamlessly across devices.",
        "Hands-on experience in state management using tools like Context API and Redux.",
        "Worked on API integration and asynchronous operations effectively using tools like Axios or Fetch.",
        "Collaborated with backend teams to ensure seamless data flow and communication.",
        "Followed Agile methodology, ensuring deliverables met deadlines and quality standards.",
      ],
      skills: [
        "React.js",
        "Redux",
        "Context API",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Jira Tool",
        "Bootstrap",
        "Axios",
        "Git",
      ],
      thoughts:
        "This project was an incredible learning experience. It allowed me to dive deep into complex state management, modular design, and API integration while solving real-world challenges in the healthcare domain.",
    },
  ];

  return (
    <section className="education-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title fw-bold mb-4 text-dark">
          Education & Experience
        </h2>
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-12 mb-4">
              <div className="experience-item p-4 border rounded shadow-sm bg-white">
                {/* Role */}
                <h3 className="item-title text-orange mb-3">{item.role}</h3>

                {/* Organization Highlight */}
                <div className="item-details mb-3">
                  <p className="p-2 border rounded text-white bg-dark">
                    <FaBuilding className="me-2 text-warning" />
                    <strong>{item.organisation}</strong>
                  </p>
                </div>

                {/* Location and Duration */}
                <div className="item-details mb-3">
                  <p>
                    <FaClock className="me-2 text-orange" />
                    <strong>Duration:</strong> {item.startDate} - {item.endDate}
                  </p>
                  <p>
                    <FaMapMarkerAlt className="me-2 text-danger" />
                    <strong>Location:</strong> {item.location}
                  </p>
                </div>

                {/* Responsibilities */}
                <h4 className="mb-3">Responsibilities:</h4>
                <ul className="list-unstyled">
                  {item.experiences.map((exp, index) => (
                    <li key={index} className="mb-2">
                      <FaTasks className="me-2 text-secondary" />
                      {exp}
                    </li>
                  ))}
                </ul>

                {/* Project Details */}
                <h4 className="mt-4">Project Details:</h4>
                <div className="mb-3">
                  <p>
                    <strong>Project Name:</strong> {item.project.name}
                  </p>
                  <p>
                    <strong>Domain:</strong> {item.project.domain}
                  </p>
                  <p>
                    <strong>Description:</strong> {item.project.description}
                  </p>
                </div>

                {/* Skills */}
                <h4 className="mt-4">Skills:</h4>
                <div className="row">
                  {item.skills.map((skill, index) => (
                    <div key={index} className="col-6 col-md-3 mb-2">
                      <div className="skill-card text-center p-2 border rounded bg-light">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Thoughts */}
                <h4 className="mt-4">My Thoughts:</h4>
                <p>{item.thoughts}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
