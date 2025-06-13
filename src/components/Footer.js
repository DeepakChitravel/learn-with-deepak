import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGlobe, FaHome, FaEnvelope, FaPhone, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      }}
    >
      <Container>
        <Row className="text-center text-md-start">

          {/* Quick Links */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 fw-bold text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-white text-decoration-none"><FaHome /> Home</a></li>
              <li className="mb-2"><a href="/about" className="text-white text-decoration-none"><FaGlobe /> About</a></li>
              <li className="mb-2"><a href="/contact" className="text-white text-decoration-none"><FaEnvelope /> Contact</a></li>
              <li><a href="/courses" className="text-white text-decoration-none"><FaPhone /> Courses</a></li>
            </ul>
          </Col>

          {/* Connect with Me */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 fw-bold text-uppercase">Connect with Me</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/Deepak-Chitravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center gap-2"
                >
                  <FaLinkedin className="text-info" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://deepakchitravel.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center gap-2"
                >
                  <FaGlobe className="text-warning" /> Portfolio
                </a>
              </li>
            </ul>
          </Col>

          {/* Technologies */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 fw-bold text-uppercase">Technologies Used</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><FaReact className="text-info" /> React JS</li>
              <li><FaBootstrap className="text-primary" /> Bootstrap</li>
              <li><FaNodeJs className="text-success" /> Node.js</li>
              <li><FaGlobe className="text-warning" /> GitHub Pages</li>
            </ul>
          </Col>

          {/* Location & Quote */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 fw-bold text-uppercase">Location</h5>
            <p>Jeyaram Educational Trust, Thanjavur</p>
            <iframe
              title="Jeyaram Educational Trust Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.947373444037!2d79.11722147470234!3d10.78690478937251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9732676efc9%3A0x7f850a3a0b4e2c72!2sJeyaram%20Educational%20Trust!5e0!3m2!1sen!2sin!4v1717831311841!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{
                border: 0,
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>

        <hr className="text-light" />

        {/* Footer Bottom */}
        <Row className="text-center mt-3">
          <Col>
            <small>
              © 2025 <strong>Deepak C</strong> — <span className="text-info">Learn With Deepak</span><br />
              <em className="text-secondary">"Empowering students with digital skills."</em>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
