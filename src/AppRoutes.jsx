import { Routes, Route } from "react-router-dom";
import { TranslateProvider } from "react-google-translate-mj";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Blog from "./Screens/Blog";
import Post from "./Screens/Post";

const About = () => <div style={{ padding: "2rem" }}>About Page</div>;
const Contact = () => <div style={{ padding: "2rem" }}>Contact Page</div>;

const AppRoutes = () => {
  return (
    <TranslateProvider defaultLanguage="en">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </TranslateProvider>
  );
};

export default AppRoutes;