import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CountdownTimer from "../components/Countdown"; // Ensure this path matches your file structure

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const checkTokenValidity = async () => {
        try {
          const response = await fetch( `${BASE_URL}/api/auth/refresh`, {
            method: "GET", // Changed to GET
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            // Token is valid, assume user is authenticated
            setShowLogin(false); // Optionally, you might not need this line if you're navigating away
            navigate("/"); // Navigate to home or dashboard as required
          } else {
            // If the token is not valid, you could clear it or handle accordingly
            Cookies.remove("token"); // Clear invalid token

            //redirect to login page
            navigate("/login");
            
            
          }
        } catch (error) {
          console.error("Error checking token validity:", error);
          setShowLogin(true); // Assume token is invalid and show login button in case of error
        }
      };

      checkTokenValidity();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const style = {
    container: {
      backgroundColor: "#000000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    loginButton: {
      position: "absolute",
      top: "20px",
      right: "20px",
      padding: "10px",
      backgroundColor: "#000000",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "18px",
    },
    body: {
      backgroundColor: "#000000",
    }
  };

  return (
    <div style={style.container}>
      {showLogin && (
        <button style={style.loginButton} onClick={() => navigate("/login")}>
          Login
        </button>
      )}
      <CountdownTimer />
    </div>
  );
};

export default Home;
