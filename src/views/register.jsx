import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Cookies from "js-cookie"; // Import js-cookie for handling cookies

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState(""); // State for the registration key
  const [error, setError] = useState(""); // State to hold error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, key }),
      });

      const data = await response.json();
      if (response.status === 200) {
        Cookies.set("token", data.token, { expires: 36500 }); // Set the cookie to expire in 10 years
        navigate("/"); // Navigate to the home page or dashboard
      } else {
        throw new Error(data.error || "An error occurred");
      }
    } catch (error) {
      setError(error.message); // Update the error state
    }
  };

  // Reusing the style from the Login component for consistency
  const style = {
    container: {
      backgroundColor: "black",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    homeButton: {
      position: "absolute",
      top: "20px",
      left: "20px",
      padding: "10px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "18px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    input: {
      width: "300px",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
      backgroundColor: "#333",
      color: "white",
    },
    button: {
      width: "320px",
      padding: "10px",
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "18px",
    },
    error: {
      color: "red", // Style for error message
      marginBottom: "15px",
    },
  };

  return (
    <div style={style.container}>
      <button style={style.homeButton} onClick={() => navigate("/")}>
        Home
      </button>
      <form onSubmit={handleSubmit} style={style.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          style={style.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={style.input}
        />
        <input
          type="text"
          placeholder="Key"
          value={key}
          onChange={handleKeyChange}
          style={style.input}
        />
        {error && <div style={style.error}>{error}</div>}
        <button type="submit" style={style.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
