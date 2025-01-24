import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const personalDetails = [
  { label: "Full Name", value: "Irfan Soheb Shaikh" },
  {
    label: "Address",
    value: "Room No. 104, Galaxy A6 Apartment, Kausar Baugh, Kondhwa, Pune",
  },
  { label: "Date of Birth", value: "30th May 1995" },
  { label: "Gender", value: "Male" },
  { label: "Nationality", value: "Indian" },
  { label: "Languages Known", value: "English, Hindi, Marathi" },
  { label: "Marital Status", value: "Unmarried" },
];

const PersonalDetails = () => {
  return (
    <div className="container-fluid">
      <h5 className="mb-4">
        <strong>Personal Details</strong>
      </h5>
      <div className="row">
        {personalDetails.map((detail, index) => (
          <div key={index} className="col-12 d-flex mb-2">
            <div className="col-4 text-orange">
              <strong>{detail.label}:</strong>
            </div>
            <div className="col-8">{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetails;
