import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGlobe, FaLanguage, FaHandshake } from "react-icons/fa";

const WhyPartnerSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const partnerCards = [
    {
      icon: <FaHandshake className="display-4" />,
      title: "Build meaningful social and cultural impact",
      text: "Strengthen your brand by supporting authentic storytelling,cultural preservation, and collaborative projects that create lasting legacy",
    },
    {
      icon: <FaLanguage className="display-4" />,
      title: "Engage the right people",
      text: "Connect with socially and culturally conscious professionals, creatives,leaders and publics who value authenticity and impact",
    },
    {
      icon: <FaGlobe className="display-4" />,
      title: "Expand your reach",
      text: "Expand your reach Gain global visibility and showcase your brand to a growing audience within Igbo communities and the wider diaspora",
    },
  ];

  return (
    <>
      <style>{`
        .why-partner-wrapper {
          padding: 5rem 0;
          background-color: #fff;
        }
        /* === NEW SCRIPT STYLE (same as hero) === */
        .script-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #2d6a4f;
          padding: 0.5rem 1rem;
          border-radius: 40px;
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-size: 0.65rem;
          font-weight: 200;
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
        /* ================================ */
        .section-title-dark {
          font-weight: 700;
          color: #2c1e16;
        }
        .partner-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 2rem 1.8rem;
          height: 100%;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1),
                      box-shadow 0.3s ease;
          text-align: center;
          border: 1px solid #f0ebe5;
          
          /* More obvious initial animation */
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1s cubic-bezier(0.2, 0.9, 0.4, 1.1),
                      transform 1s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .partner-card.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .partner-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.12);
        }
        .partner-icon {
          color: #ffcc00;
          margin-bottom: 1.2rem;
          font-size: 3rem;
          transition: transform 0.2s ease;
        }
        .partner-card:hover .partner-icon {
          transform: scale(1.05);
        }
        .partner-title {
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          color: #2c1e16;
        }
        .partner-text {
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #6b6375;
        }
        .cta-button {
          background-color: #2d6a4f;
          border: none;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
          border-radius: 40px;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.2s;
        }
        .cta-button:hover {
          background-color: #1f4f3a;
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .partner-card {
            padding: 1.5rem;
            transform: translateY(40px);
          }
          .partner-icon {
            font-size: 2.5rem;
          }
          .partner-title {
            font-size: 1.2rem;
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

      <div ref={sectionRef} className="why-partner-wrapper">
        <Container>
          <div className="text-center mb-5">
            {/* Updated pill with green dot */}
            <span className="script-pill">
              <span className="script-dot"></span>
              WHY PARTNER WITH US
            </span>
            <h2 className="section-title-dark display-5 fw-bold mt-2">
              Why Partner With Us
            </h2>
          </div>

          <Row className="g-4 justify-content-center">
            {partnerCards.map((card, idx) => (
              <Col md={6} lg={4} key={idx}>
                <div
                  className={`partner-card ${hasAnimated ? 'animated' : ''}`}
                  style={{ transitionDelay: hasAnimated ? `${idx * 0.2}s` : '0s' }}
                >
                  <div className="partner-icon">{card.icon}</div>
                  <h3 className="partner-title">{card.title}</h3>
                  <p className="partner-text">{card.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            {/* <Button className="cta-button" size="lg">
              Become a Partner
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhyPartnerSection;