import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  const onClick = () => {
    try {
      // Attempt to remove the token from localStorage
      localStorage.removeItem("token");
      // Navigate to the login page
      navigate("/");
    } catch (error) {
      console.error("Error occurred while logging out:", error);
      // Handle error gracefully (e.g., display an error message)
    }
  };

  return (
    <div>
      <h1>AdminHome</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default AdminHome;
