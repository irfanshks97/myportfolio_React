import irfanheroimage from "../assets/images/irfanheroimage.jpg";
import { FaArrowAltCircleRight, FaFileAlt } from "react-icons/fa";
import { WhatIDo } from "./WhatIDo";
import { Project } from "./Project";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <section className="about-me-section pt-4 p-lg-5 theme-bg-light m-0">
        <div className="container-fluid">
          <div className="profile-teaser row">
            <div className="col">
              <motion.h2
                className="name fw-bold mb-1 fs-1 text-uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Shaikh Irfan
              </motion.h2>

              <motion.div
                className="tagline mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Software Engineer
              </motion.div>

              <motion.div
                className="bio mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                "I’m a frontend developer specializing in building dynamic and
                scalable web applications with a focus on React. With over 2
                years of hands-on experience, I craft intuitive, user-friendly
                interfaces and ensure seamless performance across platforms.
                Explore my work and discover how I can contribute to your next
                project. Want to know more about my skills? Check out my online
                resume and portfolio!"
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <Link
                  className="btn btn-orange rounded-pill me-2 mb-3"
                  to="/portfolio"
                >
                  <FaArrowAltCircleRight className="me-2" />
                  <span className="d-none d-md-inline">View</span> Portfolio
                </Link>
                <Link
                  className="btn btn-secondary rounded-pill mb-3"
                  to="./resume"
                >
                  <FaFileAlt className="me-2" />
                  <span className="d-none d-md-inline">View</span> Resume
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="col-md-5 col-lg-5"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <img
                className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                src={irfanheroimage}
                alt="myimage"
                width="300px"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <WhatIDo />
      <Project />
    </>
  );
};

export default AboutMe;
