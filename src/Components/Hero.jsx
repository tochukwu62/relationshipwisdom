import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import AboutSection from "./About";
import WhatWeDoSection from "./WhatWeDo";
import WhyPartnerSection from "./Partner";
import TeamSection from "./Team";
import CtaSection from './CTA';
import Footer from "./Footer";
import JoinUs from "./JoinUs";
// ========== LOCAL IMAGES ==========
import heroBg1 from '../assets/hero1.jpg';
import heroBg2 from '../assets/b7.jpg';
import heroBg3 from '../assets/c2.jpg';
import culturalPattern from "../assets/pattern.png";
import yellowCardBg from "../assets/c98.jpg";
import greenCardBg from "../assets/bg1.jpg";
// ===================================

const HeroSection = () => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const cardsRef = useRef(null);
  const hasAnimated = useRef(false);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroBg1, heroBg2, heroBg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setFillPercentage(80);
        }
      },
      { threshold: 0.3 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Zoom animation for carousel images */
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .rotating-pattern {
          position: absolute;
          top: 50%;
          left: 70%;
          transform: translate(-50%, calc(-50% - 40px));
          width: 40%;
          max-width: 900px;
          aspect-ratio: 1 / 1;
          background-image: url(${culturalPattern});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          z-index: 2;
          pointer-events: none;
          animation: slowRotate 30s linear infinite;
        }
        .meter-fill {
          background-color: #2c1e16;
          height: 100%;
          width: 0%;
          border-radius: 20px;
          transition: width 1s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .curved-underline {
          position: relative;
          display: inline-block;
        }
        .curved-underline::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 100%;
          height: 8px;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 12"><path d="M0,6 Q30,12 60,6 Q90,0 120,6" stroke="%23ffcc00" fill="none" stroke-width="3"/></svg>');
          background-repeat: no-repeat;
          background-size: cover;
        }
        .hero-wrapper {
          width: 100%;
          background-color: #fff;
          animation: fadeInUp 1.2s ease-out forwards;
        }
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .carousel-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          overflow: hidden;
          transform: scale(1);
        }
        .carousel-slide.active {
          opacity: 1;
          animation: zoomIn 5s forwards;
        }
        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(45, 25, 15, 0.85);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 1100px;
          width: 90%;
          text-align: center;
          color: white;
          padding: 1rem;
        }
        .script-text {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #2d6a4f;
          padding: 0.4rem 1rem;
          border-radius: 40px;
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-size: 0.65rem;
          font-weight: 100;
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
        .hero-title {
          font-size: clamp(1.8rem, 8vw, 5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          font-family: 'Cinzel', 'Playfair Display', serif;
        }
        .igbo-yellow {
          color: #ffcc00;
          position: relative;
          display: inline-block;
          font-family: 'Cinzel', 'Playfair Display', serif;
        }
        .igbo-yellow::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 100%;
          height: 8px;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .title-normal {
          font-weight: 700;
          font-family: 'Cinzel', 'Playfair Display', serif;
        }
        .hero-paragraph {
          font-size: clamp(0.9rem, 4vw, 1.2rem);
          max-width: 700px;
          margin: 1rem auto 2rem;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-custom-primary {
          background-color: #ffcc00;
          color: #2c1e16;
          padding: 0.8rem 2rem;
          border-radius: 40px;
          font-weight: 600;
          border: none;
          transition: all 0.2s ease;
        }
        .btn-custom-primary:hover {
          background-color: #e6b800;
          transform: scale(1.02);
        }
        .btn-custom-secondary {
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 40px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .btn-custom-secondary:hover {
          background: white;
          color: #2c1e16;
          transform: scale(1.02);
        }
        .cards-wrapper {
          max-width: 1200px;
          margin: 0rem auto;
          width: 90%;
        }
        .card-custom {
          padding: 1rem 1.5rem;
          height: 40vh;
        }
        @media (max-width: 768px) {
          .rotating-pattern {
            width: 90%;
            transform: translate(-50%, calc(-50% - 20px));
          }
          .cards-wrapper {
            width: 95%;
            margin: 2rem auto;
          }
          .hero-section {
            height: 95vh;
          }
          .script-text {
            font-size: 0.7rem;
            padding: 0.2rem 0.8rem;
          }
          .script-dot {
            width: 6px;
            height: 6px;
          }
        }
      `}</style>

      <div className="hero-wrapper">
        <section className="hero-section">
          <div className="carousel-container">
            {slides.map((img, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
          <div className="dark-overlay"></div>
          <div className="rotating-pattern"></div>

          <div className="hero-content">
            <span className="script-text">
              <span className="script-dot"></span>
              CULTURE & EMPOWERMENT
            </span>
            <h1 className="hero-title">
              <span className="igbo-yellow">Nkata Igbo - </span>
              <span className="title-normal"> Media & Editorial</span>
            </h1>
            <p className="hero-paragraph">
              We are committed to telling our authentic stories,
              restoring and promoting the dignity of Igbo people and
              culture at home and in diaspora
            </p>
            <div className="cta-buttons">
              <button className="btn-custom-primary">Learn More</button>
              <button className="btn-custom-secondary">Join Us</button>
            </div>
          </div>
        </section>

        <div ref={cardsRef} className="cards-wrapper">
          <div className="row g-0 shadow-lg">
            <div className="col-12 col-md-6">
              <div
                className="card-custom"
                style={{
                  color: 'white',
                  backgroundImage: `linear-gradient(rgba(45,106,79,0.85), rgba(45,106,79,0.85)), url(${greenCardBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <button className="btn btn-outline-light rounded-pill mb-3 px-4">Join</button>
                <h3 className="h2 fw-bold">Growing Conversations</h3>
                <p>Participate, share ideas, and help build our community.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className="card-custom"
                style={{
                  backgroundColor: '#ffcc00',
                  color: '#2c1e16',
                  backgroundImage: `linear-gradient(rgba(255,204,0,0.85), rgba(255,204,0,0.85)), url(${yellowCardBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h3 className="text-uppercase fw-bold small mb-3">PEOPLE REACHED</h3>
                <div className="bg-dark bg-opacity-25 rounded-pill" style={{ height: '10px' }}>
                  <div className="meter-fill rounded-pill" style={{ width: `${fillPercentage}%` }}></div>
                </div>
                <div className="d-flex justify-content-between mt-1 small fw-semibold">
                  <span>Progress: {fillPercentage}%</span>
                  <span>Goal: 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
      <WhatWeDoSection />
      <JoinUs />
      <WhyPartnerSection />
      <CtaSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default HeroSection;