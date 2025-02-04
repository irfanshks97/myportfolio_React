import { FaPaperPlane, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../assets/images/image.jpg";
function Portfolio() {
  return (
    <div className="">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              "Welcome to my portfolio! I'm Shaikh Irfan, a passionate and
              skilled Web developer. This site showcases my best work, from
              innovative projects to creative solutions. Explore my diverse
              skill set, and feel free to reach out if you're interested in
              collaborating or learning more about my work!"
            </p>
          </div>
          <Link className="btn btn-orange rounded-pill" to="/contact">
            <FaPaperPlane className="me-2" />
            Hire Me
          </Link>
        </div>
      </section>
      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-cards row isotope">
            <div className="isotope-item col-md-6 mb-5 mobileapp frontend">
              <div className="card project-card">
                <div className="row">
                  <div className="col-12 card-img-holder">
                    <img src={image} className=" p-2 card-img" alt="image" />
                  </div>
                  <div className="col-12 ">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://iconicshop-zeta.vercel.app/"
                          className="theme-link"
                        >
                          Iconic Shop
                        </a>
                      </h5>
                      <p className="card-text">
                        Iconic Shop is an online shopping platform offering a
                        wide range of trendy and high-quality products. From
                        fashion and accessories to electronics and home goods.
                        Iconic Shop delivers an exceptional shopping experience
                        with stylish, affordable options for every need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a className="link-mask-link" href="project.html"></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://iconicshop-zeta.vercel.app/"
                      target="_blank"
                    >
                      <FaEye className="me-2" />
                      Click to visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotope-item col-md-6 mb-5 ">
              <div className="card project-card">
                <div className="row">
                  <div className="col-12 card-img-holder">
                    <img src={image} className=" p-2 card-img" alt="image" />
                  </div>
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          href="https://iconicshop-zeta.vercel.app/"
                          className="theme-link"
                        >
                          Iconic Shop
                        </a>
                      </h5>
                      <p className="card-text">
                        Iconic Shop is an online shopping platform offering a
                        wide range of trendy and high-quality products. From
                        fashion and accessories to electronics and home goods.
                        Iconic Shop delivers an exceptional shopping experience
                        with stylish, affordable options for every need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://iconicshop-zeta.vercel.app/"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://iconicshop-zeta.vercel.app/"
                      target="_blank"
                    >
                      <FaEye className="me-2" />
                      Click to visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotope-item col-md-6 mb-5 mobileapp frontend">
              <div className="card project-card">
                <div className="row">
                  <div className="col-12 card-img-holder">
                    <img src={image} className=" p-2 card-img" alt="image" />
                  </div>
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="project.html" className="theme-link">
                          Iconic Shop
                        </a>
                      </h5>
                      <p className="card-text">
                        Iconic Shop is an online shopping platform offering a
                        wide range of trendy and high-quality products. From
                        fashion and accessories to electronics and home goods.
                        Iconic Shop delivers an exceptional shopping experience
                        with stylish, affordable options for every need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a
                    className="link-mask-link"
                    href="https://iconicshop-zeta.vercel.app/"
                  ></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://iconicshop-zeta.vercel.app/"
                      target="_blank"
                    >
                      <FaEye className="me-2" />
                      Click to visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotope-item col-md-6 mb-5 ">
              <div className="card project-card">
                <div className="row">
                  <div className="col-12 card-img-holder">
                    <img src={image} className=" p-2 card-img" alt="image" />
                  </div>
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="project.html" className="theme-link">
                          Iconic Shop
                        </a>
                      </h5>
                      <p className="card-text">
                        Iconic Shop is an online shopping platform offering a
                        wide range of trendy and high-quality products. From
                        fashion and accessories to electronics and home goods.
                        Iconic Shop delivers an exceptional shopping experience
                        with stylish, affordable options for every need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a className="link-mask-link" href="project.html"></a>
                  <div className="link-mask-text">
                    <a
                      className="btn btn-secondary"
                      href="https://iconicshop-zeta.vercel.app/"
                      target="_blank"
                    >
                      <FaEye className="me-2" />
                      Click to visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
