import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // Force a page reload
  }, [navigate]);

  return null; // No need to render anything
};

export default Logout;
