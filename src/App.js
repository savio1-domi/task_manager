import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <Home />
    </ChakraProvider>
  );
}

export default App;
