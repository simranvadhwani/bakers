import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    setToken("");
    return localStorage.removeItem("token");
  }, []);
  return <div>{navigate("/login")}</div>;
};

export default Logout;
