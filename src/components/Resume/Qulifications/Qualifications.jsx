import React from "react";

const educationDetails = [
  {
    degree: "PG-DAC",
    institute: "Center For Development of Advance Computing, Noida",
    score: "67.63%",
    yearOfPassing: "2022-2023",
  },
  {
    degree: "B.E in Mechanical Engineering",
    institute: "VIT Sandipani Technical Campus, Kolpa, SRTM University",
    score: "65.39%",
    yearOfPassing: "2016-2020",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institute: "Phoenix Institute of Polytechnic, Lodga, MSBTE University",
    score: "69.35%",
    yearOfPassing: "2013-2016",
  },
];

export const Qualification = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h5 className="mb-4 ">
            <strong>Educational Qualifications</strong>
          </h5>
        </div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="text-orange mb-0">
                  <strong>{edu.degree}</strong>
                </h6>
                <span className="text-muted small">{edu.yearOfPassing}</span>
              </div>
              <p className="mb-1">
                <strong>Institute:</strong> {edu.institute}
              </p>
              {edu.score && (
                <p className="mb-0">
                  <strong>Score:</strong> {edu.score}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
