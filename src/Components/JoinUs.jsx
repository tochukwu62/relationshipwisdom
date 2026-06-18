import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaBookOpen, FaUsers, FaHandsHelping } from "react-icons/fa";
import joinBg from "../assets/pattern.png";        // main section background
import brownCardBg from "../assets/de.jpg";   // ← new image for the brown card

const JoinUs = () => {
  const benefits = [
    {
      id: "01",
      icon: <FaBookOpen />,
      title: "Gain & Share Knowledge",
      text: "Learn about Igbo origins, history, and culture through our online and in‑person meetings, programs, and publications.",
    },
    {
      id: "02",
      icon: <FaUsers />,
      title: "Build Meaningful Connections",
      text: "Connect with a diverse community of Igbo people across all ages and backgrounds, both at home and in the diaspora. Build lasting relationships.",
    },
    {
      id: "03",
      icon: <FaHandsHelping />,
      title: "Benefit from Educational Programs",
      text: "Benefit from a wide range of programs: Igbo language learning (children & adults), Igbo history and heritage, traditional wellness, authentic Igbo cuisine, and creative writing.",
    },
  ];

  return (
    <>
      <style>{`
        .why-join-unique {
          position: relative;
          padding: 5rem 0;
          background-image: url(${joinBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: 0;
        }
        .why-join-unique::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.85);
          z-index: 1;
        }
        .why-join-unique .container {
          position: relative;
          z-index: 2;
        }
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
        .section-title-dark {
          font-weight: 700;
          color: #2c1e16;
        }
        /* Left card with its own background image + dark overlay */
        .join-left {
          position: relative;
          background-image: url(${brownCardBg});
          background-size: cover;
          background-position: center;
          border-radius: 30px;
          padding: 2rem;
          color: white;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        /* Dark overlay over the card background */
        .join-left::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(44, 30, 22, 0.85);
          z-index: 1;
          border-radius: 30px;
        }
        .join-left > * {
          position: relative;
          z-index: 2;
        }
        .join-left h2 {
          font-family:serif;
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #ffcc00;
        }
        .join-left .big-number {
          font-size: 3rem;
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;
          color: #ffcc00;
          margin: 1.5rem 0 0.5rem;
        }
        .join-left .stat-text {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .benefit-step {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.85);
          padding: 1rem;
          border-radius: 20px;
          backdrop-filter: blur(2px);
        }
        .step-number {
          background-color: #2d6a4f;
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
          flex-shrink: 0;
        }
        .step-icon {
          color: #ffcc00;
          font-size: 1.4rem;
          margin-right: 0.75rem;
        }
        .step-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: #2c1e16;
        }
        .step-text {
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          color: #4a4a4a;
        }
        .cta-join {
          background-color: #2d6a4f;
          border: none;
          padding: 0.7rem 2rem;
          font-weight: 600;
          border-radius: 40px;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.2s;
          margin-top: 1rem;
        }
        .cta-join:hover {
          background-color: #1f4f3a;
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .join-left {
            margin-bottom: 2rem;
          }
          .benefit-step {
            gap: 0.75rem;
            padding: 0.8rem;
          }
        }
      `}</style>

      <div className="why-join-unique">
        <Container>
          <div className="text-center mb-5">
            <span className="script-pill">
              <span className="script-dot"></span>
              Why Join Us
            </span>
            <h2 className="section-title-dark display-5 fw-bold mt-2">
              Join the Nkata Igbo Community
            </h2>
          </div>

          <Row className="align-items-stretch">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="join-left">
                <h2>Become part of something bigger</h2>
                <p style={{ opacity: 0.9 }}>
                  Membership is open to anyone who shares our passion for Igbo culture.
                </p>
                <div className="big-number">200+</div>
                <div className="stat-text">Active members worldwide</div>
                <div className="big-number" style={{ fontSize: '3rem' }}>5+</div>
                <div className="stat-text"> programs running</div>
                <Button className="cta-join w-100 mt-4">Join Us Today →</Button>
              </div>
            </Col>

            <Col lg={7}>
              {benefits.map((item) => (
                <div className="benefit-step" key={item.id}>
                  <div className="step-number">{item.id}</div>
                  <div>
                    <div className="step-title">
                      <span className="step-icon">{item.icon}</span> {item.title}
                    </div>
                    <div className="step-text">{item.text}</div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default JoinUs;