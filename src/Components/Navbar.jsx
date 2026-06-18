import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/loto.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <style>{`
        /* ===== DESKTOP STYLES ===== */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: transparent;
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          color: white;
          box-sizing: border-box;
        }
        .nav-logo {
          height: 40px;
          width: auto;
          display: flex;
          align-items: center;
        }
        .nav-logo img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #ffcc00;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
          z-index: 1001;
        }
        .hamburger .bar {
          width: 25px;
          height: 3px;
          background-color: white;
          transition: all 0.3s;
        }
        .sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100%;
          background-color: #2c1e16;
          backdrop-filter: blur(12px);
          transition: right 0.3s ease;
          z-index: 1002;
          padding: 80px 2rem 2rem;
          box-shadow: -5px 0 15px rgba(0,0,0,0.3);
        }
        .sidebar.open {
          right: 0;
        }
        .close-sidebar {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 28px;
          font-weight: bold;
          color: white;
          cursor: pointer;
          background: none;
          border: none;
          transition: color 0.2s;
          font-family: sans-serif;
        }
        .close-sidebar:hover {
          color: #ffcc00;
        }
        .sidebar .nav-links-side {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .sidebar .nav-links-side a {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .sidebar .nav-links-side a:hover {
          color: #ffcc00;
        }
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          z-index: 1001;
          display: none;
        }
        .sidebar-overlay.open {
          display: block;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
        body {
          margin: 0;
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-logo">
          <img src={logoImg} alt="Igbo App Logo" />
        </div>

        {/* Desktop nav links – now includes Blog */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link to="/blog">Blog</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>

        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={closeSidebar}>✕</button>
        <ul className="nav-links-side">
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
          <li><Link to="/blog" onClick={closeSidebar}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
        </ul>
      </div>

      <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={closeSidebar}></div>
    </>
  );
};

export default Navbar;