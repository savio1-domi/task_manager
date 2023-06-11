import React, { useState } from "react";
import { Box, Heading, Input, Button, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // For checking if password && confirmPassword matches
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const gotoLoginPage = () => {
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");

      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      console.log({ email, username, tel, password, confirmPassword });

      fetch("https://sinatra-web-app.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          phone_number: tel,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          console.log(data);
          alert("Registration successful.");
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Registration failed. Please try again.");
        });
    }
  };

  return (
    <Box
      mb="3rem"
      className="signup__container form"
    >
      <Heading as="h2" size="md" mb={4}>
        Sign up
      </Heading>
      <img
        style={{
          width: "350px",
        }}
        src={require("../../assets/up-amico.png")}
        alt="Registration illustration"
      />
      <form className="signup__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          mb={4}
        />
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          mb={4}
        />
        <label htmlFor="tel">Phone Number</label>
        <Input
          type="tel"
          name="tel"
          id="tel"
          value={tel}
          required
          onChange={(e) => setTel(e.target.value)}
          mb={4}
        />
        <label htmlFor="tel">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          minLength={8}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={4}
        />
        <label htmlFor="tel">Confirm Password</label>
        <Input
          type="password"
          name="confirm password"
          id="confirmpassword"
          minLength={8}
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          mb={4}
        />
        {error && <Text color="red">{error}</Text>}
        <Button type="submit" colorScheme="blue" mb={4}>
          SIGN UP
        </Button>
        <Text>
          Already have an account?{" "}
          <Link
            className="link"
            onClick={gotoLoginPage}
            color="red"
            cursor="pointer"
          >
            Login
          </Link>
        </Text>
      </form>
    </Box>
  );
}

export default Register;
