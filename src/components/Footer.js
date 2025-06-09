import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        marginTop: '60px'
      }}
    >
      <Container>
        <Row className="text-center text-md-start">
          {/* Contact Links */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3 fw-bold text-uppercase">Connect with Me</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/Deepak-Chitravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center gap-2"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <FaLinkedin size={18} className="text-info" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://deepakchitravel.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center gap-2"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <FaGlobe size={18} className="text-warning" /> Portfolio
                </a>
              </li>
            </ul>
          </Col>

          {/* Location Map */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3 fw-bold text-uppercase">Location</h5>
            <p>Jeyaram Educational Trust, Thanjavur</p>
            <div
              style={{
                width: '100%',
                height: '150px',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)'
              }}
            >
              <iframe
                title="Jeyaram Educational Trust Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.947373444037!2d79.11722147470234!3d10.78690478937251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9732676efc9%3A0x7f850a3a0b4e2c72!2sJeyaram%20Educational%20Trust!5e0!3m2!1sen!2sin!4v1717831311841!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          {/* Copyright */}
          <Col
            md={4}
            className="d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0"
          >
            <small className="text-white text-center">
              © 2025 <strong>Deepak C</strong> <br />
              <span className="text-info">Learn With Deepak</span>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
