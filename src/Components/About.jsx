import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import local images
import aboutBg from "../assets/c5.jpg";
import verticalImage from "../assets/b22.jpg";
import overlayCircleImg from "../assets/b.jpg";
import smallCircleImg from "../assets/b1.jpeg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ===== RELATIVE WRAPPER ===== */
        .about-wrapper {
          position: relative;
          overflow: hidden;
          z-index: 0;
        }
        /* ===== FIXED BACKGROUND (parallax) ===== */
        .about-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${aboutBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* PARALLAX */
          z-index: 0;
        }
        /* Dark overlay on the background */
        .about-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.62);
          z-index: 1;
        }
        /* ===== ANIMATED SECTION ===== */
        .about-section {
          position: relative;
          z-index: 2;
          padding: 5rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1),
                      transform 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .about-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .about-content {
          color: white;
        }
        /* ===== GREEN PILL ===== */
        .script-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #2d6a4f;
          padding: 0.3rem 1rem;
          border-radius: 40px;
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          color: white;
          letter-spacing: normal;
          margin-bottom: 1.2rem;
        }
        .script-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #b7e4c7;
          border-radius: 50%;
          margin-right: 4px;
        }
        /* ===== IMAGE STACK (unchanged) ===== */
        .image-stack {
          position: relative;
          display: inline-block;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .main-rectangle {
          width: 100%;
          max-width: 320px;
          height: 500px;
          object-fit: cover;
          border-radius: 30px 30px 30px 0;
          display: block;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
        .overlay-circle {
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #ffcc00;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          z-index: 3;
        }
        .small-circle {
          position: absolute;
          top: -20px;
          right: -50px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
          z-index: 4;
        }
        .floating-dot {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          z-index: 5;
          animation: float 3s ease-in-out infinite;
        }
        .dot-yellow {
          background-color: #ffcc00;
          top: 130px;
          right: -30px;
          box-shadow: 0 0 8px #ffcc00;
        }
        .dot-green {
          background-color: #2d6a4f;
          top: -20px;
          left: -30px;
          box-shadow: 0 0 8px #2d6a4f;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 768px) {
          .image-stack {
            margin-top: 3rem;
            max-width: 280px;
          }
          .main-rectangle {
            max-width: 100%;
            height: 420px;
          }
          .overlay-circle {
            width: 90px;
            height: 90px;
            bottom: -20px;
            left: -20px;
          }
          .small-circle {
            width: 95px;
            height: 95px;
            right: -25px;
            top: -15px;
          }
          .dot-yellow {
            top: 160px;
            right: -20px;
          }
          .dot-green {
            top: -15px;
            left: -20px;
          }
          .script-pill {
            font-size: 0.7rem;
            padding: 0.2rem 0.8rem;
          }
          .script-dot {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>

      <div className="about-wrapper">
        {/* Fixed background – covers the whole wrapper */}
        <div className="about-bg"></div>

        {/* Animated content */}
        <section ref={sectionRef} className={`about-section ${isVisible ? 'visible' : ''}`}>
          <Container className="about-content">
            <Row className="align-items-center">
              <Col lg={12} className="text-center text-lg-start mb-5 mb-lg-0">
                <span className="script-pill">
                  <span className="script-dot "></span>
                  Our Story
                </span>
                <h2 className="text-white display-4 fw-bold mb-4 text-center">
                  Preserving & Celebrating Igbo Culture
                </h2>
                <p className="text-white lead mb-4 text-center" style={{fontWeight:'normal'}}>
                  Nkata Igbo Media & Editorials is a
                  social organization devoted to
                  celebrating and preserving Igbo
                  cultural heritage, while advancing
                  awareness and understanding of Igbo
                  traditions and people
                </p>
                <p className="text-white lead text-center" style={{fontWeight:'normal'}}>
                  Join us on a journey to rediscover the wisdom of our ancestors,
                  amplify Igbo voices, and build a global network of cultural
                  ambassadors.
                </p>
              </Col>

            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default AboutSection;