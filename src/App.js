import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";
import AboutUs from "./Components/AboutUs/AboutUs";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import OurTeam from "./Components/OurTeam/OurTeam";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import LogIn from "./Components/LogIn/LogIn";
import ShowNavbar from "./Components/ShowNavbar/ShowNavbar";
import ShowFooter from "./Components/ShowFooter/ShowFooter";
import Register from "./Components/Register/Register";

function App() {
  return (
    <>
      <ShowNavbar>
        <Navbar />
      </ShowNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ShowFooter>
        <Footer />
      </ShowFooter>

      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}

export default App;
