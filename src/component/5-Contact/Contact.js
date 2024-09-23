import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Contact() {
  return (
    <>
      <div className="contact py-5">
        <div className="container">
          <h3>Get On touch</h3>
        <div className="touch-content d-flex justify-content-between pt-3 ">
            <a href="#">
                <span className="pe-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                abdullahahmedcb1@gmail.com
                </a>
                <a href="#" className="contact-now btn">
                Contact Now
                </a>
                <div className=" d-flex flex-column">
                <div className="social">
                    <a href="#">
                    <FontAwesomeIcon icon={faFacebook} className="face" />
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} className="link" />
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={faSquareGithub} className="git" />
                    </a>
                </div>
                <div className="copy">
                    &copy; 2024 <span>ahmed ayad</span> all right reserved
                </div>
                </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;