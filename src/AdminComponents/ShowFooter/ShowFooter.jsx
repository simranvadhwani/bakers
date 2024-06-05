import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ShowFooter({ children }) {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);
  return <div>{showFooter && children}</div>;
}
