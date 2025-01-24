import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

export const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "PG-Diploma in Advanced Computing",
      university: "CDAC - Center For Developement Of Advance Computing ",
      passingYear: "Sep-2022 - march-2023",
      description:
        "I pursued a comprehensive web development program at CDAC, where I honed my skills in modern web technologies including React, JavaScript, HTML, CSS, and more.",
    },
    {
      id: 2,
      degree: "Bachelor's Engineering",
      university: "SRTMUN, Nanded-university",
      passingYear: "Aug-2016 - Feb-2020",
      description:
        "I did my Bachelor's Engineering in Mechanical from VIT Sandipani Technical Campus, Latur",
    },
    {
      id: 3,
      degree: "Diploma in Engineering",
      university: "MSBTE, Mumbai-University",
      passingYear: "Aug-2013 - June-2016",
      description:
        "I did Diploma in Mechanical Engineering from Phoenix Institute of Polytechnic, Lodga, Latur",
    },
    {
      id: 4,
      degree: "HSC",
      university: "MSBSHS University",
      passingYear: "June-2012 - May-2013",
      description: "I did HSC (12th) from Azeem Junior College, Ausa, Latur",
    },
    {
      id: 5,
      degree: "SSC",
      university: "MSBSHS University",
      passingYear: "June-2010 - June-2011",
      description:
        "I completed my schooling from Zilla Parishad High School, Lamjana",
    },
  ];

  return (
    <section className="education-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title fw-bold mb-4">Education</h2>
        <div className="row">
          {educationData.map((item) => (
            <div key={item.id} className="col-12 col-md-6 mb-4">
              <div className="education-item p-4 border rounded shadow-sm bg-white">
                <div className="item-header d-flex align-items-center mb-3">
                  <FaGraduationCap className="me-3 text-orange" size={30} />
                  <h3 className="item-title mb-0">{item.degree}</h3>
                </div>
                <p className="mb-2">
                  <FaUniversity className="me-2 text-secondary" />
                  <strong>University:</strong> {item.university}
                </p>
                <p className="mb-2">
                  <FaCalendarAlt className="me-2 text-danger" />
                  <strong>Passing Year:</strong> {item.passingYear}
                </p>
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
