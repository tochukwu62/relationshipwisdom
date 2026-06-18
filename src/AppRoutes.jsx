// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Home from "./Screens/Home";

// const About = () => <div style={{ padding: "2rem" }}>About Page</div>;
// const Contact = () => <div style={{ padding: "2rem" }}>Contact Page</div>;

// const AppRoutes = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// };

// export default AppRoutes;






import { Routes, Route } from "react-router-dom";
import { TranslateProvider } from "react-google-translate-mj"; // add this import
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";

const About = () => <div style={{ padding: "2rem" }}>About Page</div>;
const Contact = () => <div style={{ padding: "2rem" }}>Contact Page</div>;

const AppRoutes = () => {
  return (
    <TranslateProvider defaultLanguage="en">  {/* wrap everything */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </TranslateProvider>
  );
};

export default AppRoutes;