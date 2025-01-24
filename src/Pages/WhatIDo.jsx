import { BiLogoRedux } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJira,
  FaJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { motion } from "framer-motion"; // Import motion from framer-motion

export const WhatIDo = () => {
  return (
    <section className="overview-section p-3 p-lg-5">
      <div className="container">
        <motion.h2
          className="section-title fw-bold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What I do
        </motion.h2>

        <motion.div
          className="section-intro mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          I bring over 2+ years of experience in crafting responsive and dynamic
          web applications. Below is a quick overview of my key technical skills
          and the technologies I specialize in. Interested in learning more
          about my experience? Explore my projects and accomplishments!
        </motion.div>

        <motion.div className="row">
          {/* JavaScript */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon text-warning">
                <FaJs />
              </div>
              <h3 className="item-title">JavaScript</h3>
              <div className="item-desc">
                Proficient in writing clean, maintainable code using modern
                JavaScript (ES6+). Skilled in DOM manipulation, event handling,
                and asynchronous programming using Promises and async/await.
              </div>
            </div>
          </motion.div>

          {/* React */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon">
                <FaReact className="ms-2 text-primary" />
              </div>
              <h3 className="item-title">React</h3>
              <div className="item-desc">
                Experienced in developing dynamic, component-based web
                applications using React. Skilled in managing state with React
                hooks (useState, useEffect) and libraries like Redux for complex
                applications. Proficient in creating reusable components,
                handling API integration.
              </div>
            </div>
          </motion.div>

          {/* Redux */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon text-danger">
                <BiLogoRedux />
              </div>
              <h3 className="item-title text-dark">Redux.js</h3>
              <div className="item-desc">
                Proficient in managing complex application states with Redux,
                using tools like Redux Toolkit and middleware like Redux Thunk.
              </div>
            </div>
          </motion.div>

          {/* Git */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon text-warning">
                <FaGitAlt />
              </div>
              <h3 className="item-title">Git &amp; Version Control</h3>
              <div className="item-desc">
                Skilled in version control using Git. Experienced with
                branching, merging, and pull requests for collaborative
                development. Proficient with platforms like GitHub and GitLab
                for managing repositories.
              </div>
            </div>
          </motion.div>

          {/* PHP */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon text-primary">
                <FaPhp />
              </div>
              <h3 className="item-title">PHP</h3>
              <div className="item-desc">
                Proficient in writing clean PHP code for dynamic server-side
                applications, creating RESTful APIs, and integrating with MySQL
                databases.
              </div>
            </div>
          </motion.div>

          {/* Jira */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon">
                <FaJira />
              </div>
              <h3 className="item-title">Jira tool</h3>
              <div className="item-desc">
                Experienced in using Jira for task management, sprint planning,
                and tracking project progress in Agile environments. Familiar
                with creating and managing tickets, workflows, and backlog
                grooming.
              </div>
            </div>
          </motion.div>

          {/* HTML & CSS */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon">
                <FaHtml5 className="me-2 text-warning" />
                <FaCss3 className="me-2 text-primary" />
              </div>
              <h3 className="item-title">HTML &amp; CSS</h3>
              <div className="item-desc">
                Proficient in crafting responsive, accessible, and semantic
                websites. Skilled in CSS methodologies like Flexbox and Grid,
                and familiar with preprocessors (SASS/SCSS) for efficient
                styling.
              </div>
            </div>
          </motion.div>

          {/* Bootstrap & MUI */}
          <motion.div
            className="item col-6 col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="item-inner">
              <div className="item-icon">
                <FaBootstrap className="me-2" />
                <SiMui className="text-primary" />
              </div>
              <h3 className="item-title">Bootstrap &amp; MUI</h3>
              <div className="item-desc">
                Proficient in using Bootstrap for building responsive and
                mobile-first web applications. Skilled in leveraging its grid
                system, pre-designed components, and utility classes to create
                consistent and professional designs efficiently.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
