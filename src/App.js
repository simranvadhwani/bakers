import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import Logout from "./Components/Logout/Logout";
import AdminHome from "./AdminComponents/AdminHome/AdminHome";
import { jwtDecode as jwt_decode } from "jwt-decode";
import Cart from "./Components/Cart/Cart";
import ViewProduct from "./Components/ViewProduct/ViewProduct";
import Payment from "./Components/Payment/Payment";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [lenth, setLenth] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      const userRoles =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]; // Assuming roles are stored in the token
      // Check if user has admin role
      if (userRoles && userRoles.includes("Admin")) {
        setIsAdmin(true);
        navigate("/admin-dashboard");
      }

      setLoggedIn(true);
    }
  }, [navigate]);

  return (
    <>
      {isAdmin ? (
        <Routes>
          <Route path="/admin-dashboard" element={<AdminHome />} />
          <Route path="/" element={<LogIn />} />
        </Routes>
      ) : (
        <>
          <ShowNavbar>
            <Navbar lenth={lenth} />
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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <ShowFooter>
            <Footer />
          </ShowFooter>
        </>
      )}
    </>
  );
}

export default App;
