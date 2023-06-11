import React, { useState } from "react";
import { Box, Heading, Input, Button, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Fetch from "../hooks/Fetch.js";

function Login() {
  const { data } = Fetch("https://sinatra-web-app.onrender.com/credentials");

  const navigate = useNavigate();

  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      data.map((item) => {
        if (email === item.email && password === item.password) {
          alert("Success!");
          setLoginEmail("");
          setLoginPassword("");
          navigate("/home");
        }
        return null;
      });
    }
  };
  

  const gotoSignUpPage = () => navigate("/");

  return (
    <Box className="form">
      <Heading as="h2" size="md" mb={4}>
        Login
      </Heading>
      <img
        style={{
          width: "350px",
        }}
        src={require("../../assets/login-cuate.png")}
        alt=""
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setLoginEmail(e.target.value)}
          mb={4}
        />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          required
          onChange={(e) => setLoginPassword(e.target.value)}
          mb={4}
        />

        <Button type="submit" colorScheme="blue">
          LOGIN
        </Button>
        <p>
          Don't have an account?{" "}
          <Link
            className="link"
            onClick={gotoSignUpPage}
            style={{ color: "red", cursor: "pointer" }}
          >
            Sign Up
          </Link>
        </p>
      </form>
    </Box>
  );
}

export default Login;
