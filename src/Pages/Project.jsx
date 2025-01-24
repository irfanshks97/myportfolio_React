import { FaEye } from "react-icons/fa";
import image from "../assets/images/image.jpg";
import { motion } from "framer-motion"; // Import motion from framer-motion

export const Project = () => {
  return (
    <section className="featured-section p-3 p-lg-5">
      <div className="container">
        <motion.h2
          className="section-title fw-bold mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="row">
          {/* Project 1 */}
          <motion.div
            className="col-md-6 mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img src={image} className="card-img" alt="image" />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="project.html" className="theme-link">
                        Project Heading
                      </a>
                    </h5>
                    <p className="card-text">
                      Project intro lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Cum sociis natoque penatibus et magnis
                      dis parturient montes.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Client: Google</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <FaEye className="me-2" />
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="col-md-6 mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img src={image} className="card-img" alt="image" />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="project.html" className="theme-link">
                        Project Heading
                      </a>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Client: Dropbox</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <FaEye className="me-2" />
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="col-md-6 mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img src={image} className="card-img" alt="image" />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="project.html" className="theme-link">
                        Project Heading
                      </a>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Client: Google</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <FaEye className="me-2" />
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            className="col-md-6 mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card project-card">
              <div className="row no-gutters">
                <div className="col-12 col-xl-5 card-img-holder">
                  <img src={image} className="card-img" alt="image" />
                </div>
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="project.html" className="theme-link">
                        Project Heading
                      </a>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Client: Uber</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html"></a>
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <FaEye className="me-2" />
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
