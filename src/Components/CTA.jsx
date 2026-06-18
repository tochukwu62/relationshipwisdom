import React from "react";
import { Container, Button } from "react-bootstrap";
import ctaBgImage from "../assets/b0.jpg"; // replace with your actual image path

const CtaSection = () => {
  return (
    <>
      <style>{`
        .cta-full-width {
          position: relative;
          width: 100%;
          background-image: linear-gradient(rgba(45, 106, 79, 0.75), rgba(45, 106, 79, 0.79)), url(${ctaBgImage});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 5rem 2rem;
          text-align: center;
          background-attachment: fixed;
        }
        .cta-title {
          font-size: clamp(1.8rem, 6vw, 3rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        .cta-paragraph {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          color: #f0ebe5;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        .cta-button {
          background-color: #ffcc00;
          color: #2c1e16;
          padding: 0.8rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 40px;
          transition: all 0.2s ease;
          font-family: 'Montserrat', sans-serif;
        }
        .cta-button:hover {
          background-color: #e6b800;
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .cta-full-width {
            padding: 3rem 1rem;
          }
          .cta-paragraph {
            font-size: 0.9rem;
            padding: 0 1rem;
          }
        }
      `}</style>

      <div className="cta-full-width">
        <Container>
          <h2 className="cta-title">Ready to partner with us?</h2>
          <p className="cta-paragraph">
            Partner with us in preserving and promoting Igbo culture, language, and heritage.
            Together we can make a lasting impact for generations to come.
          </p>
          <Button className="cta-button">Get Involved</Button>
        </Container>
      </div>
    </>
  );
};

export default CtaSection;