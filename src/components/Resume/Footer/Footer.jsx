import { FaGithubSquare, FaLinkedin } from "react-icons/fa"; // Importing React Icons
import { FaEnvelope } from "react-icons/fa6";

const Footer = ({ theme }) => {
  console.log(theme);
  return (
    <div className="resume-footer text-center py-4">
      <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted d-flex align-items-center justify-content-center">
        <li className=" mb-lg-0 me-3">
          <a
            className="text-orange"
            href="https://github.com/irfanshks97"
            target="_blank"
          >
            <FaGithubSquare className="fa-2x me-2" size={16} />
            <span className="d-none d-lg-inline-block text-muted">
              <strong className={`${theme ? "text-light" : "text-muted"}`}>
                github.com/irfanshks67
              </strong>
            </span>
          </a>
        </li>
        <li className="mb-lg-0 me-3">
          <a
            className="text-orange"
            href="https://linkedin.com/in/irfanshks97"
            target="_blank"
          >
            <FaLinkedin className="fa-2x me-2 text-orange" size={16} />
            <span className="d-none d-lg-inline-block ">
              <strong className={`${theme ? "text-light" : "text-muted"}`}>
                linkedin.com/in/irfanshks97
              </strong>
            </span>
          </a>
        </li>
        <li className="list-inline-item mb-lg-0 me-lg-3">
          <a className="text-dark" href="#" target="_blank">
            <FaEnvelope className="fa-2x me-2 text-orange" size={16} />
            <span className="d-none d-lg-inline-block">
              <strong className={`${theme ? "text-light" : "text-muted"}`}>
                irfanshks97@gmail.com
              </strong>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
