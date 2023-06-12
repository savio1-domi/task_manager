import React from "react";
import { createRoot } from "react-dom/client"; // Update the import statement
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

// Wrap your rendering logic with createRoot
createRoot(document.getElementById("root")).render( // Use createRoot from "react-dom"
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <BrowserRouter>
        <Nav />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
