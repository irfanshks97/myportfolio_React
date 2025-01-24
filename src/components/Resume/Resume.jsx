import React, { useState } from "react";
import { ResumeHeader } from "./ResumeHeader/ResumeHeader";

export const Resume = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <>
      <ResumeHeader />
    </>
  );
};
