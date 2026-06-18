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
        /* ===== DESKTOP STYLES (unchanged) ===== */
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
        /* Hamburger icon (hidden on desktop) */
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
        /* Sidebar (mobile only) – now with BROWN background */
        .sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100%;
          background-color: #2c1e16;  /* dark brown, not black */
          backdrop-filter: blur(12px);
          transition: right 0.3s ease;
          z-index: 1002;
          padding: 80px 2rem 2rem;
          box-shadow: -5px 0 15px rgba(0,0,0,0.3);
        }
        .sidebar.open {
          right: 0;
        }
        /* Close (X) button */
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
        /* Overlay to close sidebar when clicked outside */
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
        /* RESPONSIVE: mobile */
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

        {/* Desktop nav links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger icon (mobile) */}
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {/* Sidebar (mobile) with brown background and X button */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={closeSidebar}>✕</button>
        <ul className="nav-links-side">
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
        </ul>
      </div>

      {/* Overlay to close sidebar */}
      <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={closeSidebar}></div>
    </>
  );
};

export default Navbar;











// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useTranslator } from "react-google-translate-mj";
// import logoImg from "../assets/loto.png";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { setLanguage, currentLanguage } = useTranslator();

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   const toggleLanguage = () => {
//     setLanguage(currentLanguage === "en" ? "ig" : "en");
//   };

//   return (
//     <>
//       <style>{`
//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           background-color: transparent;
//           backdrop-filter: blur(10px);
//           padding: 1rem 2rem;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           z-index: 1000;
//           color: white;
//           box-sizing: border-box;
//         }
//         .nav-logo {
//           height: 40px;
//           width: auto;
//           display: flex;
//           align-items: center;
//         }
//         .nav-logo img {
//           height: 100%;
//           width: auto;
//           object-fit: contain;
//         }
//         .nav-links {
//           list-style: none;
//           display: flex;
//           gap: 2rem;
//           margin: 0;
//           padding: 0;
//           align-items: center;
//         }
//         .nav-links a {
//           text-decoration: none;
//           color: white;
//           font-weight: 500;
//           transition: color 0.3s;
//         }
//         .nav-links a:hover {
//           color: #ffcc00;
//         }
//         .lang-btn {
//           background: #2d6a4f;
//           border: none;
//           color: white;
//           padding: 0.3rem 1rem;
//           border-radius: 40px;
//           font-family: 'Montserrat', sans-serif;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s;
//         }
//         .lang-btn:hover {
//           background: #ffcc00;
//           color: #2c1e16;
//           transform: scale(1.02);
//         }
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           cursor: pointer;
//           gap: 5px;
//           z-index: 1001;
//         }
//         .hamburger .bar {
//           width: 25px;
//           height: 3px;
//           background-color: white;
//           transition: all 0.3s;
//         }
//         .sidebar {
//           position: fixed;
//           top: 0;
//           right: -100%;
//           width: 280px;
//           height: 100%;
//           background-color: #2c1e16;
//           backdrop-filter: blur(12px);
//           transition: right 0.3s ease;
//           z-index: 1002;
//           padding: 80px 2rem 2rem;
//           box-shadow: -5px 0 15px rgba(0,0,0,0.3);
//         }
//         .sidebar.open {
//           right: 0;
//         }
//         .close-sidebar {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           font-size: 28px;
//           font-weight: bold;
//           color: white;
//           cursor: pointer;
//           background: none;
//           border: none;
//           transition: color 0.2s;
//           font-family: sans-serif;
//         }
//         .close-sidebar:hover {
//           color: #ffcc00;
//         }
//         .sidebar .nav-links-side {
//           list-style: none;
//           padding: 0;
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//         }
//         .sidebar .nav-links-side a {
//           text-decoration: none;
//           color: white;
//           font-size: 1.2rem;
//           font-weight: 500;
//           transition: color 0.2s;
//         }
//         .sidebar .nav-links-side a:hover {
//           color: #ffcc00;
//         }
//         .sidebar-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0,0,0,0.5);
//           z-index: 1001;
//           display: none;
//         }
//         .sidebar-overlay.open {
//           display: block;
//         }
//         @media (max-width: 768px) {
//           .nav-links {
//             display: none;
//           }
//           .hamburger {
//             display: flex;
//           }
//         }
//         body {
//           margin: 0;
//         }
//       `}</style>

//       <nav className="navbar">
//         <div className="nav-logo">
//           <img src={logoImg} alt="Igbo App Logo" />
//         </div>

//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><button className="lang-btn" onClick={toggleLanguage}>
//             {currentLanguage === "en" ? "Igbo" : "English"}
//           </button></li>
//         </ul>

//         <div className="hamburger" onClick={toggleSidebar}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//       </nav>

//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <button className="close-sidebar" onClick={closeSidebar}>✕</button>
//         <ul className="nav-links-side">
//           <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
//           <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
//           <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
//           <li><button className="lang-btn" onClick={toggleLanguage}>
//             {currentLanguage === "en" ? "Igbo" : "English"}
//           </button></li>
//         </ul>
//       </div>

//       <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={closeSidebar}></div>
//     </>
//   );
// };

// export default Navbar;