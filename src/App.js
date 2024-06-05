import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import AdminTemplate from "../src/AdminComponents/AdminTemplate";
import UserTemplate from "../src/Components/UserTemplate";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      const userRoles =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]; // Assuming roles are stored in the token
      // Check if user has admin role
      if (userRoles && userRoles.includes("Admin")) {
        setIsAdmin(true);
        if (location.pathname === "/") {
          navigate("/admin-dashboard");
        }
      }

      setLoggedIn(true);
    }
  }, [navigate, location]);

  useEffect(() => {
    // Initialize cart length from local storage
    const storedCartLength = localStorage.getItem("cartLength");
    if (storedCartLength) {
      setCartLength(parseInt(storedCartLength, 10));
    }

    // Set up storage event listener
    const handleStorageChange = () => {
      const updatedCartLength = localStorage.getItem("cartLength");
      if (updatedCartLength) {
        setCartLength(parseInt(updatedCartLength, 10));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {isAdmin ? <AdminTemplate /> : <UserTemplate cartLength={cartLength} />}
    </>
  );
}

export default App;
