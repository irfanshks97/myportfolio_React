import { BiLogoRedux } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { motion } from "framer-motion";

export const WhatIDo = () => {
  const skills = [
    {
      title: "JavaScript",
      icon: <FaJs className="text-warning fs-1" />,
      description:
        "Proficient in writing clean, maintainable code using modern JavaScript (ES6+). Skilled in DOM manipulation, event handling, and asynchronous programming.",
    },
    {
      title: "React",
      icon: <FaReact className="text-primary fs-1" />,
      description:
        "Experienced in developing dynamic, component-based web applications using React. Skilled in managing state with React hooks and Redux.",
    },
    {
      title: "Redux.js",
      icon: <BiLogoRedux className="text-danger fs-1" />,
      description:
        "Proficient in managing complex application states with Redux, using tools like Redux Toolkit and middleware.",
    },
    {
      title: "Git & Version Control",
      icon: <FaGitAlt className="text-warning fs-1" />,
      description:
        "Skilled in version control using Git. Experienced with branching, merging, and pull requests for collaborative development.",
    },
    {
      title: "PHP",
      icon: <FaPhp className="text-primary fs-1" />,
      description:
        "Proficient in writing clean PHP code for dynamic server-side applications, creating RESTful APIs, and integrating with MySQL databases.",
    },
    {
      title: "HTML & CSS",
      icon: <FaHtml5 className="text-warning fs-1" />,
      description:
        "Proficient in crafting responsive, accessible, and semantic websites. Skilled in CSS methodologies like Flexbox and Grid.",
    },
    {
      title: "Bootstrap & MUI",
      icon: (
        <div className="d-flex justify-content-center align-items-center">
          <FaBootstrap className="me-2 text-primary" />
          <SiMui className="text-info" />
        </div>
      ),
      description:
        "Proficient in using Bootstrap for building responsive and mobile-first web applications. Skilled in leveraging its grid system, pre-designed components, and utility classes.",
    },
  ];

  const animationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <section className="overview-section p-md-4 pt-4">
      <div className="container">
        <motion.h2
          className="section-title fw-bold mb-3 text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What I do
        </motion.h2>

        <motion.div
          className="section-intro mb-5 text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          I bring over 2+ years of experience in crafting responsive and dynamic
          web applications. Below is a quick overview of my key technical skills
          and the technologies I specialize in.
        </motion.div>

        <motion.div className="row">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-6 col-lg-3 mb-4 d-flex"
              {...animationProps}
            >
              <div className="item-inner border rounded shadow p-3 text-center h-100">
                <div className="item-icon">{skill.icon}</div>
                <h3 className="item-title mt-3">{skill.title}</h3>
                <p className="item-desc">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
