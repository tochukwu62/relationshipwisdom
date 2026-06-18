import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Local images – replace with your own
import card1Bg from "../assets/c2.jpg";
import card2Bg from "../assets/b33.jpg";
import card3Bg from "../assets/b4.jpg";
import culturalPatternSvg from "../assets/pattern.png";

const WhatWeDoSection = () => {
  const cardsData = [
    {
      id: "01",
      title: "Sharing the Igbo Story",
      text: "Sharing the Igbo Story We share and explore Igbocultural history, traditions,and beliefs through literature, folklore,storytelling, and research",
      bgImage: card1Bg,
      tintColor: "rgba(255, 204, 0, 0.2)",
      bgColor: "#f4a261",
    },
    {
      id: "02",
      title: "Connecting People",
      text: "Through our online and physical activities, programs,we promote Igbo history,culture and heritage all overthe world.",
      bgImage: card2Bg,
      tintColor: "rgba(45, 106, 79, 0.25)",
      bgColor: "#2d6a4f",
    },
    {
      id: "03",
      title: "Building Alliances to Strengthen Igbo Heritage",
      text: "We push for the promotion ofIgbo culture by collaboratingwith individuals, strategicgroups and government parastatals.",
      bgImage: card3Bg,
      tintColor: "rgba(150, 75, 0, 0.25)",
      bgColor: "#9b5de5",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=League+Spartan:wght@400;700;800&display=swap');

        .what-we-do-wrapper {
          padding: 5rem 0;
          background-color: #f8f9fa;
        }
        /* === GREEN PILL (replaces .script-yellow) === */
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
        /* ================================ */
        .section-title {
          font-weight: 700;
          color: #2c1e16;
        }
        /* Card container – no gap, overflow hidden for scale effect */
        .card-wrapper {
          position: relative;
          overflow: hidden;
          height: 100%;
          min-height: 400px;
          background-color: var(--card-bg);
        }
        /* Inner card with background image that scales on hover */
        .card-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 0;
        }
        .card-wrapper:hover .card-inner {
          transform: scale(1.08);
        }
        /* Gradient overlay (transparent top → dark bottom) */
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
          pointer-events: none;
        }
        /* Colour tint per card */
        .card-tint {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--tint);
          z-index: 2;
          pointer-events: none;
        }
        /* Rotating pattern */
        .card-pattern {
          position: absolute;
          bottom: -30px;
          right: -130px;
          width: 300px;
          height: 300px;
          background-image: url(${culturalPatternSvg});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.4s ease;
          z-index: 3;
          pointer-events: none;
        }
        .card-wrapper:hover .card-pattern {
          opacity: 0.25;
          transform: rotate(15deg);
        }
        /* Content */
        .card-content {
          position: relative;
          z-index: 4;
          padding: 2rem 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .card-number {
          font-family: 'Anton', 'Bebas Neue', 'League Spartan', sans-serif;
          font-size: 5.5rem;
          font-weight: 100;
          line-height: 0.85;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        .card-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-family: 'Montserrat', 'Poppins', sans-serif;
        }
        .card-text {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
          font-family: 'Poppins', sans-serif;
        }
        @media (max-width: 768px) {
          .card-wrapper {
            min-height: 350px;
          }
          .card-number {
            font-size: 3.8rem;
            letter-spacing: 2px;
          }
          .card-title {
            font-size: 1.3rem;
          }
          .card-pattern {
            width: 390px;
            height: 300px;
            bottom: -20px;
            right: -160px;
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

      <div className="what-we-do-wrapper">
        <Container>
          <div className="text-center mb-5">
            {/* Replaced .script-yellow with green pill */}
            <span className="script-pill">
              <span className="script-dot"></span>
              OUR SERVICES
            </span>
            <h2 className="section-title display-5 fw-bold mt-2">What We Do</h2>
          </div>

          <Row className="g-0">
            {cardsData.map((card, idx) => (
              <Col md={4} key={idx}>
                <div className="card-wrapper" style={{ '--card-bg': card.bgColor }}>
                  <div className="card-inner" style={{ backgroundImage: `url(${card.bgImage})` }}></div>
                  <div className="card-overlay"></div>
                  <div className="card-tint" style={{ '--tint': card.tintColor }}></div>
                  <div className="card-pattern"></div>
                  <div className="card-content">
                    <div className="card-number">{card.id}</div>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhatWeDoSection;