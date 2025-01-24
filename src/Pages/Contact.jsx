import {
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="container-fluid">
      <section className="cta-section py-5 bg-light">
        <div className=" text-center container-fluid">
          <h2 className="heading">Contact</h2>
          <div className="intro">
            <p>
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to{" "}
              <a
                className="text-link text-orange fw-bold"
                href="mailto:irfanshks97@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you."
              >
                irfanshks97@gmail.com
              </a>
            </p>
            <p>
              Want to get connected? Follow me on the social channels below.
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-3 ms-2">
                <a
                  className="linkedin text-muted"
                  href="https://www.linkedin.com/in/irfanshks97/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              <li className="list-inline-item mb-3 ms-2">
                <a
                  className="facebook text-muted"
                  href="https://www.facebook.com/p/Er-Shaikh-100014528709145/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="list-inline-item mb-3 ms-2">
                <a
                  className="instagram text-muted"
                  href="https://www.instagram.com/er.shaikh67"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="list-inline-item mb-3 ms-2">
                <a
                  className="github text-muted"
                  href="https://github.com/irfanshks97/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubAlt size={24} />
                </a>
              </li>
              <li className="list-inline-item mb-3 ms-2">
                <a
                  className="facebook text-muted"
                  href="https://wa.me/9860338964"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp size={24} />
                </a>
              </li>
              <li className="list-inline-item mb-3 ms-2">
                <a
                  className="twitter text-muted"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form
            id="contact-form"
            className="contact-form col-lg-8 mx-lg-auto"
            method="post"
            action=""
          >
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="sr-only mb-2" htmlFor="cname">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="cname"
                  name="name"
                  placeholder="Name"
                  minLength="2"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="sr-only mb-2" htmlFor="cemail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id="cemail"
                  name="email"
                  placeholder="Email"
                  required=""
                  aria-required="true"
                />
              </div>

              <div className="col-12">
                <label className="sr-only mb-2" htmlFor="cmessage">
                  Your message
                </label>
                <textarea
                  className="form-control "
                  id="cmessage"
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required=""
                  aria-required="true"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  className="btn btn-orange rounded-pill py-2 w-100"
                >
                  Send Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
