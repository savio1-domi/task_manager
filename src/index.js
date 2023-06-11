import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset, IconButton, useColorMode } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { FaSun, FaMoon } from "react-icons/fa";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";
import App from "./App";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      size="md"
      variant="ghost"
      aria-label="Toggle Theme"
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <BrowserRouter>
        <Nav />
        <ThemeToggle /> {/* Add the ThemeToggle component */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
