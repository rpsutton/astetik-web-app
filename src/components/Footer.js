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
              <img src={require('../assets/logo.png')} alt="Logo"/>
            </Link>
          </div>
          <div className="social right">
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
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
