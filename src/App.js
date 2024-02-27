import "./App.css";
import Spinner from "./Components/Spinner/Spinner";
import Navbar from "./Components/Navbar/Navbar";
import Slides from "./Components/Slides/Slides";
import Experience from "./Components/Experience/Experience";
import AboutUs from "./Components/AboutUs/AboutUs";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import OurTeam from "./Components/OurTeam/OurTeam";
import Clients from "./Components/Clients/Clients";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Spinner />
      <Navbar />
      <Slides />
      <Experience />
      <AboutUs />
      <Products />
      <Services />
      <OurTeam />
      <Clients />
      <Footer />

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
