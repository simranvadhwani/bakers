import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Experience from "../Components/Experience/Experience";
import AboutUs from "../Components/AboutUs/AboutUs";
import Products from "../Components/Products/Products";
import Services from "../Components/Services/Services";
import OurTeam from "../Components/OurTeam/OurTeam";
import ContactUs from "../Components/ContactUs/ContactUs";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import Logout from "../Components/Logout/Logout";
import Cart from "../Components/Cart/Cart";
import ViewProduct from "../Components/ViewProduct/ViewProduct";
import Payment from "../Components/Payment/Payment";
import Shipping from "../Components/Shipping/Shipping";
import ShowNavbar from "../Components/ShowNavbar/ShowNavbar";
import ShowFooter from "../Components/ShowFooter/ShowFooter";

const UserTemplate = ({ cartLength }) => {
  useEffect(() => {
    // Load User specific CSS and JS
    const loadCss = (href) => {
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = href;
      document.head.appendChild(cssLink);
      return cssLink;
    };

    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      return script;
    };

    // Load CSS files
    const styleCss = loadCss("/css/style.css");
    const bootstrapCss = loadCss("/css/bootstrap.min.css");
    const fontAwesomeCss = loadCss(
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    );
    const bootstrapIconsCss = loadCss(
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    );
    const animateCss = loadCss("/lib/animate/animate.min.css");
    const owlCarouselCss = loadCss("/lib/owlcarousel/owl.carousel.min.css");

    // Load JS files
    const jqueryJs = loadScript("https://code.jquery.com/jquery-3.4.1.min.js");
    const bootstrapJs = loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
    );
    const wowJs = loadScript("/lib/wow/wow.min.js");
    // const easingJs = loadScript("/lib/easing/easing.min.js");
    // const waypointsJs = loadScript("/lib/waypoints/waypoints.min.js");
    // const counterupJs = loadScript("/lib/counterup/counterup.min.js");
    // const owlCarouselJs = loadScript("/lib/owlcarousel/owl.carousel.min.js");

    // Clean up function
    return () => {
      document.head.removeChild(styleCss);
      document.head.removeChild(bootstrapCss);
      document.head.removeChild(fontAwesomeCss);
      document.head.removeChild(bootstrapIconsCss);
      document.head.removeChild(animateCss);
      document.head.removeChild(owlCarouselCss);
      document.body.removeChild(jqueryJs);
      document.body.removeChild(bootstrapJs);
      document.body.removeChild(wowJs);
      // document.body.removeChild(easingJs);
      // document.body.removeChild(waypointsJs);
      // document.body.removeChild(counterupJs);
      // document.body.removeChild(owlCarouselJs);
    };
  }, []);

  return (
    <>
      <ShowNavbar>
        <Navbar cartLength={cartLength} />
      </ShowNavbar>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <ShowFooter>
        <Footer />
      </ShowFooter>
    </>
  );
};

export default UserTemplate;
