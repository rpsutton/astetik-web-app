import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={require('../assets/logo.png')} alt="Logo" />
            </Link>
          </div>
          <div className="links right">
            <p><span role="img" aria-label="sheep">Made with ❤️ by Paul Sutton</span></p>
          </div>
          <div className="social right">
            <a
              href="https://www.linkedin.com/in/rps3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-linkedin fa-lg" />
              </span>
            </a>
            <a
              href="https://github.com/rpsutton/astetik-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-github fa-lg" />
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;


/*
import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div className="links right">
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <a
              target="_blank"
              href="https://medium.com"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
          <div className="social right">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-twitter" />
              </span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-facebook-f" />
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-instagram" />
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;




Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={require('../assets/logo.png')} alt="Logo"/>
            </Link>
          </div>
        
          <div className="social right ">
            <section className="d-flex flex-row align-content-center">
            <p>Made by Paul Sutton</p>
            <a
              href="https://www.linkedin.com/in/rps3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon pt-2 pl-1">
                <i className="fab fa-linkedin fa-lg"/>
              </span>
            </a>
            </section>
            <section className="d-flex flex-row align-content-center">
            <p>Check it out on Github</p>
            <a
              href="https://github.com/rpsutton/astetik-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon pt-2 pl-1">
                <i className="fab fa-github fa-lg"/>
              </span>
            </a>
            </section>
          </div>

          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>

*/