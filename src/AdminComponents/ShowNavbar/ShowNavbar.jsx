import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ShowNavbar({ children }) {
  const location = useLocation();
  console.log(location);
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
}

export default ShowNavbar;
