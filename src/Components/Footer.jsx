import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaHome, FaInfoCircle, FaEnvelope, FaFolderOpen, FaBook, FaCalendarAlt,
  FaPhoneAlt, FaMapMarkerAlt
} from "react-icons/fa";
import culturalPattern from "../assets/pattern.png"; // your local pattern image

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-wrapper {
          position: relative;
          background-color: #2c1e16;
          color: #f0ebe5;
          padding: 3rem 0 2rem;
          margin-top: 4rem;
          overflow: hidden;
        }
        .footer-pattern {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 280px;
          height: 280px;
          background-image: url(${culturalPattern});
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.2;
          pointer-events: none;
          z-index: 0;
        }
        .footer-content {
          position: relative;
          z-index: 1;
        }
        .footer-brand {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffcc00;
          margin-bottom: 0.5rem;
        }
        .footer-text {
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          color: #d1c7b8;
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-links a {
          color: #f0ebe5;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #ffcc00;
        }
        .footer-icon {
          color: #ffcc00;
          font-size: 0.85rem;
          min-width: 20px;
        }
        .social-icons-footer {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icon-footer {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.1);
          color: #f0ebe5;
          transition: all 0.2s ease;
          font-size: 1rem;
          text-decoration: none;
        }
        .social-icon-footer:hover {
          background-color: #ffcc00;
          color: #2c1e16;
          transform: translateY(-3px);
        }
        .copyright {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.5rem;
          margin-top: 2rem;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          color: #b0a594;
        }
        @media (max-width: 768px) {
          .footer-wrapper {
            text-align: center;
          }
          .social-icons-footer {
            justify-content: center;
          }
          .footer-links li {
            justify-content: center;
          }
          .footer-pattern {
            width: 320px;
            height: 320px;
            bottom: -30px;
            right: -70px;
          }
            .footer-row .col {
    flex: 0 0 50%;
    max-width: 50%;
    text-align: left;
    margin-bottom: 2rem;
  }
  .footer-row .col:nth-child(odd) {
    padding-right: 1rem;
  }
        }
      `}</style>

      <div className="footer-wrapper">
        <div className="footer-pattern"></div>
        <Container className="footer-content">
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <div className="footer-brand">Nkata Igbo</div>
              <p className="footer-text">
                Preserving Igbo language, culture, and heritage through media and community.
              </p>
              <div className="social-icons-footer">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Explore</h5>
              <ul className="footer-links">
                <li><FaHome className="footer-icon" /><a href="/">Home</a></li>
                <li><FaInfoCircle className="footer-icon" /><a href="/about">About</a></li>
                <li><FaEnvelope className="footer-icon" /><a href="/contact">Contact</a></li>
              </ul>
            </Col>
            <Col md={3} className="mb-4 mb-md-0">
              <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Work</h5>
              <ul className="footer-links">
                <li><FaFolderOpen className="footer-icon" /><a href="#">Media Projects</a></li>
                <li><FaBook className="footer-icon" /><a href="#">Language Resources</a></li>
                <li><FaCalendarAlt className="footer-icon" /><a href="#">Cultural Events</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact</h5>
              <ul className="footer-links">
                <li><FaEnvelope className="footer-icon" /><a href="mailto:hello@nkataigbo.com">hello@nkataigbo.com</a></li>
                <li><FaPhoneAlt className="footer-icon" /><a href="#">+234 703 845 2684</a></li>
                <li><FaMapMarkerAlt className="footer-icon" /><span>Awka, Nigeria</span></li>
              </ul>
            </Col>
          </Row>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Nkata Igbo Media & Editorial. All rights reserved.
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;