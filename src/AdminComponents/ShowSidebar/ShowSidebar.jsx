import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ShowSidebar({ children }) {
  const location = useLocation();
  console.log(location);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [location]);
  return <div>{showSidebar && children}</div>;
}

export default ShowSidebar;
