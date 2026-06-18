import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Local images – replace with your actual team photos
import teamMember1 from "../assets/r.png";
import teamMember2 from "../assets/r4.png";
import teamMember3 from "../assets/r333.png";


const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "Dr.Chigozie Nweke-Eze",
      role: "Founder & Executive director",
      image: teamMember1,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Nkemakonam Anyaorah",
      role: "Media Director",
      image: teamMember2,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
     {
      name: "Chiazorom Okeke",
      role: "Cultural Director",
      image: teamMember3,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
  ];

  return (
    <>
      <style>{`
        /* ===== FADE-IN ANIMATION (unchanged) ===== */
        .team-wrapper {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1),
                      transform 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .team-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* ===== GREEN PILL (replaces .script-yellow) ===== */
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
        /* ===== YOUR ORIGINAL STYLES (untouched below) ===== */
        .team-wrapper {
          padding: 5rem 0;
          background-color: #fefaf5;
        }
        .team-title {
          font-weight: 700;
          color: #2c1e16;
        }
        .team-card {
          background: transparent;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          text-align: center;
          padding: 1.5rem;
          height: 100%;
        }
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.1);
        }
        .team-image {
          width: 180px;
          height: 180px;
          object-fit: cover;
          margin: 0 auto 1.5rem;
          display: block;
        }
        .team-name {
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          margin-bottom: 0.3rem;
          color: #2c1e16;
        }
        .team-role {
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          color: #6b6375;
          margin-bottom: 1.2rem;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
        }
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #f0ebe5;
          color: #2c1e16;
          transition: all 0.2s ease;
          font-size: 1rem;
          text-decoration: none;
        }
        .social-icon:hover {
          background-color: #ffcc00;
          color: #2c1e16;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .team-image {
            width: 140px;
            height: 140px;
          }
          .team-name {
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

      <div ref={sectionRef} className={`team-wrapper ${isVisible ? 'visible' : ''}`}>
        <Container>
          <div className="text-center mb-5">
            {/* Replaced yellow text with green pill */}
            <span className="script-pill">
              <span className="script-dot"></span>
              THE TEAM
            </span>
            <h2 className="team-title display-5 fw-bold mt-2">
              Nkata Igbo Media & Editorial Team
            </h2>
          </div>

          <Row className="justify-content-center g-4">
            {teamMembers.map((member, idx) => (
              <Col md={6} key={idx}>
                <div className="team-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="social-icons">
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedinIn />
                    </a>
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

export default TeamSection;